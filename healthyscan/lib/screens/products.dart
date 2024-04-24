import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:healthyscan/screens/result.dart';

class ProductTile extends StatelessWidget {
  final String imageLink;
  final String name;
  final String details;
  final Function onTap;
  // final BuildContext context;

  const ProductTile({
    Key? key,
    required this.imageLink,
    required this.name,
    required this.details,
    required this.onTap,
    // required this.context,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.only(top: 5.0, bottom: 5.0, left: 5, right: 5),
      child: Column(
        children: [
          InkWell(
            onTap: () {
              // Define the action you want to perform on tap
              print('Product Tile Tapped!');
              onTap(); // Call the passed-in 'onTap' function
            },
            child: Column(
              children: [
                Container(
                  height: 100.0, // Adjust height as needed
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(15.0),
                    color: Colors.white,
                  ),
                  child: Row(
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(15.0),
                        child: Image.network(
                          imageLink,
                          width: 80.0, // Adjust width as needed
                          height: 90.0, // Adjust height as needed
                          fit: BoxFit.cover, // Cover the entire area
                          errorBuilder: (context, error, stackTrace) =>
                              const Icon(Icons
                                  .error), // Display error icon if image fails to load
                        ),
                      ),
                      const SizedBox(
                          width: 10.0), // Spacing between image and text
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment
                              .spaceBetween, // Align top and bottom
                          children: [
                            Text(
                              name,
                              style: const TextStyle(
                                  fontSize: 18.0, fontWeight: FontWeight.w400),
                              maxLines:
                                  2, // Allow wrapping for long product names
                            ),
                            SizedBox(
                              height: 15,
                            ),
                            Expanded(
                              child: Text(
                                details, // Optional details section
                                style: const TextStyle(
                                    fontSize: 14.0,
                                    fontWeight: FontWeight.w200),
                                maxLines: 2, // Allow wrapping for details
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 10,
                )
              ],
            ),
          ),
          // Divider(
          //   thickness: 1.0,
          //   color: Colors.grey,
          // ),
        ],
      ),
    );
  }
}

class ProductSearchPage extends StatefulWidget {
  final dynamic data; // Data received from homePage

  const ProductSearchPage({Key? key, required this.data}) : super(key: key);

  @override
  State<ProductSearchPage> createState() => _ProductSearchPageState();
}

void navigateToSearchResults(BuildContext context, dynamic decodedData) {
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (context) => ResultPage(data: decodedData),
    ),
  );
}

Future<dynamic> getData(String barcode) async {
  String url = 'https://techvilla-server-mannat.onrender.com/$barcode';

  ///search-products?name=red+bull
  final response = await http.get(Uri.parse(url));
  if (response.statusCode == 200) {
    final data = response.body;
    var decodedData = jsonDecode(data);
    print(decodedData[0]);
  } else {
    print('Request failed with status: ${response.statusCode}');
  }
  return response;
}

class _ProductSearchPageState extends State<ProductSearchPage> {
  @override
  Widget build(BuildContext context) {
    // Access the received data from homePage
    final products = widget.data;

    return Scaffold(
      body: Column(
        children: [
          Container(
            padding: EdgeInsets.only(top: 50, left: 24),
            child: Row(
              children: [
                Image.asset('assets/icon2.png'),
              ],
            ),
            height: 100,
            width: double.infinity,
          ),
          Expanded(
            child: ListView.builder(
              itemCount: products?.length ?? 0, // Handle null data gracefully
              itemBuilder: (context, index) {
                final productData =
                    products[index]; // Get product data from list

                return ProductTile(
                  imageLink: productData['images'][0], // Handle missing keys
                  name: productData['name'] ?? '',
                  details: productData['description'] ?? '',
                  onTap: () {
                    final searchTerm = productData['barcode'];
                    getData(searchTerm).then((response) {
                      if (response.statusCode == 200) {
                        final decodedData = jsonDecode(response.body);
                        navigateToSearchResults(context, decodedData);
                      } else {
                        print(
                            'Request failed with status: ${response.statusCode}');
                      }
                    });
                    // Handle product tile tap
                    print("Product details: $productData"); // Example usage
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
