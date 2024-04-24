import 'package:flutter/material.dart';
import 'package:healthyscan/screens/barcode.dart';
import 'package:healthyscan/screens/products.dart';
import 'package:healthyscan/screens/test_screen.dart';
import '../widgets/widgets.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class homePage extends StatefulWidget {
  const homePage({super.key});

  @override
  State<homePage> createState() => _homePageState();
}

class _homePageState extends State<homePage> {
  String searchValue = "";
  List<dynamic>? data;
  @override
  Widget build(BuildContext context) {
    Future<dynamic> getCategoryData(String name) async {
      String url =
          'https://techvilla-server-mannat.onrender.com/homepage/$name';
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

    void navigateToSearchResults(BuildContext context, dynamic decodedData) {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => ProductSearchPage(data: decodedData),
        ),
      );
    }

    final onPressedFunctions = [
      () {
        final searchTerm = 'Chips';
        getCategoryData(searchTerm).then((response) {
          if (response.statusCode == 200) {
            final decodedData = jsonDecode(response.body);
            navigateToSearchResults(context, decodedData);
          } else {
            print('Request failed with status: ${response.statusCode}');
          }
        });
      },
      () {
        final searchTerm = 'Beverages';
        getCategoryData(searchTerm).then((response) {
          if (response.statusCode == 200) {
            final decodedData = jsonDecode(response.body);
            navigateToSearchResults(context, decodedData);
          } else {
            print('Request failed with status: ${response.statusCode}');
          }
        });
      }, // Example navigation
      () {
        final searchTerm = 'Biscuits';
        getCategoryData(searchTerm).then((response) {
          if (response.statusCode == 200) {
            final decodedData = jsonDecode(response.body);
            navigateToSearchResults(context, decodedData);
          } else {
            print('Request failed with status: ${response.statusCode}');
          }
        });
      }, // No function for the third image
      () {
        final searchTerm = 'Noodles';
        getCategoryData(searchTerm).then((response) {
          if (response.statusCode == 200) {
            final decodedData = jsonDecode(response.body);
            navigateToSearchResults(context, decodedData);
          } else {
            print('Request failed with status: ${response.statusCode}');
          }
        });
      }
    ];

    return SafeArea(
      child: Scaffold(
        backgroundColor: Color(0xFFefefef),
        body: Stack(
          children: [
            SingleChildScrollView(
              child: Column(children: [
                Container(
                  height: 430,
                  width: double.infinity,
                  // decoration: BoxDecoration(
                  //   borderRadius: BorderRadius.only(
                  //       bottomLeft: Radius.circular(32),
                  //       bottomRight: Radius.circular(32)),
                  //
                  //   color: Color(0xFFa8d1ce),
                  //   boxShadow: const [
                  //     BoxShadow(
                  //       color: Colors.grey,
                  //       offset: Offset(0, 5.0), // Optional subtle shadow
                  //       blurRadius: 10.0, // Adjust blur radius as needed
                  //       spreadRadius: -1,
                  //       // Adjust spread radius as needed
                  //     ),
                  //   ], // Adjust radius as needed
                  // ),
                  child: Container(
                    padding: EdgeInsets.all(30.0),
                    child: Column(
                      children: [
                        Container(
                          height: 80,
                          child: Row(children: [
                            Image.asset('assets/icon2.png'),
                            Expanded(
                              child: SizedBox(
                                width: double.infinity,
                              ),
                            ),
                            CircleAvatar(
                              backgroundColor: Colors.white,
                              child: IconButton(
                                onPressed: () {
                                  // Add your action here (e.g., navigate to a new screen, print a message)
                                  print('IconButton pressed!');
                                },
                                icon: Icon(Icons
                                    .question_mark_outlined), // You can customize the icon here
                                color: Colors.black, // Adjust color as needed
                              ),
                            ),
                          ]),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        CustomSearchBar(),
                        SizedBox(
                          height: 30,
                        ),
                        Container(
                          height: 180,
                          width: double.infinity,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20.0),
                          ),
                          child: Carousel(),
                        ),
                      ],
                    ),
                  ),
                ),
                SizedBox(
                  height: 15,
                ),
                // IconButton(onPressed: print(data), icon: Icon(Icons.ice_skating)),
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Container(
                      padding: EdgeInsets.only(left: 38, right: 50),
                      child: Text(
                        'CATEGORIES',
                        style: TextStyle(fontSize: 16, color: Colors.grey),
                      ),
                    ),
                  ],
                ), //CustomDivider(text: 'CATEGORIES'))
                SizedBox(
                  height: 20,
                ),
                Container(
                  padding: EdgeInsets.only(left: 30, right: 20),
                  child: Column(
                    children: [
                      FourImageBoxes(
                        onPressed: onPressedFunctions,
                        imageUrls: [
                          'https://thumbs.dreamstime.com/b/hot-spicy-snack-chips-bag-plastic-packaging-design-illustration-icon-food-beverage-business-potato-branding-element-logo-205125292.jpg',
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCXjpfTNbax7mHjPPbfgy-SCrHxRsE87QG1Br_JZPpQ&s',
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJK9tMEb1JGGmqq1YkpPqudsOYhtcMG_esDfbZD5PlA&s',
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAD2fjhp42ytD8fHU9Te86eoR9vFk1R0QVGKCaGAyxg&s',
                        ],
                        imageTexts: [
                          'Snacks',
                          'Bevarage',
                          'Bakery',
                          'Chocolate',
                        ],
                      ),
                      SizedBox(
                        height: 15,
                      ),
                      FourImageBoxes(
                        onPressed: onPressedFunctions,
                        imageUrls: [
                          'https://www.carrydor.com/image/cache/catalog/Snacks/haldiram-aloo-bhujia-400-gram-packet-1-550x550h.jpg',
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMrj2m-MknfhJQuRk4xG-37iIeYpeQHGUkl83utU4-A&s',
                          'https://www.bigbasket.com/media/uploads/p/l/101489_7-mccain-smiles-crispy-happy-potatoes.jpg',
                          'https://cdn01.pharmeasy.in/dam/products_otc/I04947/nestle-cerelac-baby-cereal-with-milk-multigrain-fruits-from-12-to-24-months-box-of-300gm-2-1708082239.jpg',
                        ],
                        imageTexts: [
                          'Namkeen',
                          'Gourmet',
                          'Frozen',
                          'Baby Food',
                        ],
                      ),
                      SizedBox(
                        height: 40,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Container(
                            padding: EdgeInsets.only(left: 10, right: 50),
                            child: Text(
                              'SCAN BARCODE',
                              style:
                                  TextStyle(fontSize: 16, color: Colors.grey),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 25,
                      ),
                      Container(
                        height: 100,
                        width: 200,
                        child: BarcodeScannerButton(
                            imageUrl:
                                'https://cdn3.vectorstock.com/i/1000x1000/25/07/barcode-scanner-icon-gray-monochrome-style-vector-11352507.jpg'),
                      ),
                      SizedBox(
                        height: 50,
                      ),
                    ],
                  ),
                ),
              ]),
            ),
            Positioned(
              right: 20.0, // Adjust spacing from right edge
              bottom: 20.0, // Adjust spacing from bottom edge
              child: FloatingActionButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => ChatScreen()),
                  );
                  print('Floating action button pressed!');
                },
                backgroundColor: Color(0xFF031040),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10.0), // Adjust as needed
                  child: Container(
                    width: 60.0, // Adjust width and height as needed
                    height: 60.0, // Adjust width and height as needed
                    child: Image.network(
                      'https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-1938811039.jpg',
                      fit: BoxFit.cover, // Ensure image covers the container
                    ),
                  ),
                ),
                // Adjust color as needed (consider transparent background)
              ),
            ),
          ],
        ),
      ),
    );
  }
}
