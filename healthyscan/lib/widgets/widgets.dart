import 'package:flutter/material.dart';
import 'package:flutter_carousel_widget/flutter_carousel_widget.dart';
import 'package:healthyscan/screens/result.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class ShopButton extends StatelessWidget {
  const ShopButton({super.key});

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: () {
        // Handle button press action (e.g., navigate to shopping cart)
      },
      child: Row(
        mainAxisSize: MainAxisSize.min, // Center contents horizontally
        children: [
          Icon(
            Icons.shopping_cart,
            color: Colors.white,
          ),
          SizedBox(width: 5.0), // Add some spacing between icon and text
          Text(
            'Shop Now',
            style: TextStyle(color: Colors.white),
          ),
        ],
      ),
      style: OutlinedButton.styleFrom(
        backgroundColor: Colors.redAccent.shade200,
        shape: RoundedRectangleBorder(
          borderRadius:
              BorderRadius.circular(10.0), // Adjust corner radius as needed
        ),
      ),
    );
  }
}

class CustomDivider extends StatelessWidget {
  final String text;
  const CustomDivider({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          // Ensures the divider stretches horizontally (no change)
          child: Container(
            height: 1.0, // Adjust divider height as needed
            color: Colors.grey, // Divider color
          ),
        ),
        Padding(
          // Pads the text slightly on both sides (no change)
          padding: const EdgeInsets.symmetric(horizontal: 10.0),
          child: Text(
            '$text',
            style: TextStyle(color: Colors.grey), // Text color
          ),
        ),
        Expanded(
          // Ensures the divider stretches horizontally on the right (no change)
          child: Container(
            height: 1.0, // Adjust divider height as needed
            color: Colors.grey, // Divider color
          ),
        ),
      ],
    );
  }
}

Map<String, double> dataMap = {
  "Calories": 350,
  "Fats": 70,
  "Carbs": 100,
  "Vitamins": 2,
};

class ExpandableCard extends StatefulWidget {
  final String title;
  final String content;

  const ExpandableCard({super.key, required this.title, required this.content});

  @override
  State<ExpandableCard> createState() => _ExpandableCardState();
}

class _ExpandableCardState extends State<ExpandableCard> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: [
          ListTile(
            title: Text(
              widget.title,
              style:
                  const TextStyle(fontSize: 16.0, fontWeight: FontWeight.bold),
            ),
            trailing: IconButton(
              icon: Icon(
                _isExpanded ? Icons.expand_less : Icons.expand_more,
              ),
              onPressed: () => setState(() => _isExpanded = !_isExpanded),
            ),
          ),
          if (_isExpanded)
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Text(
                widget.content,
                style: const TextStyle(fontSize: 14.0),
              ),
            ),
        ],
      ),
    );
  }
}

class FourImageBoxes extends StatelessWidget {
  final List<String> imageUrls; // Replace with your image URLs
  final List<String>
      imageTexts; // Replace with corresponding text for each image
  final List<void Function()?>
      onPressed; // List of functions for each image tap

  const FourImageBoxes({
    super.key,
    required this.imageUrls,
    required this.imageTexts,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    if (imageUrls.length != imageTexts.length ||
        imageUrls.length != onPressed.length) {
      throw Exception(
          'Image URL, Text, and onPressed lists must have the same length');
    }

    return Row(
      children: [
        for (int i = 0; i < imageUrls.length; i++) ...[
          Expanded(
            child: Column(
              children: [
                InkWell(
                  onTap: () =>
                      onPressed[i]?.call(), // Call function if available
                  child: Container(
                    height: 80.0, // Adjust height as needed
                    decoration: BoxDecoration(
                      borderRadius:
                          BorderRadius.circular(30.0), // Rounded corners
                      border: Border.all(
                        color: Colors.grey.withOpacity(
                            0.2), // Low opacity border /withOpacity(0.2)
                      ),
                    ),
                    child: ClipRRect(
                      // Clip content to rounded corners
                      borderRadius: BorderRadius.circular(30.0),
                      child: Image.network(
                        imageUrls[i],
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 5.0, // Adjust spacing between image and text
                ),
                Text(
                  imageTexts[i],
                  textAlign: TextAlign.center, // Center text horizontally
                  style: TextStyle(
                    fontSize: 12.0, // Adjust font size as needed
                    fontWeight: FontWeight.w500, // Make text bold
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(
            width: 10,
          ), // Add spacer between each box
        ],
      ],
    );
  }
}

class CustomSearchBar extends StatefulWidget {
  final TextEditingController textEditingController = TextEditingController();

  @override
  _CustomSearchBarState createState() => _CustomSearchBarState();
}

class _CustomSearchBarState extends State<CustomSearchBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        color: Colors.white,
      ),
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: widget
                  .textEditingController, // Access controller using widget.textEditingController
              decoration: InputDecoration(
                contentPadding: EdgeInsets.symmetric(horizontal: 24),
                hintText: 'Search items',
                hintStyle: TextStyle(
                  color: Colors.grey.shade900.withOpacity(0.5),
                ),
                border: InputBorder.none,
              ),
              cursorColor: Colors.black,
              textInputAction: TextInputAction.search,
            ),
          ),
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              final searchTerm = widget.textEditingController.text;
              getData(searchTerm).then((response) {
                if (response.statusCode == 200) {
                  final decodedData = jsonDecode(response.body);
                  navigateToSearchResults(context, decodedData);
                } else {
                  print('Request failed with status: ${response.statusCode}');
                }
              });
            },
          ),
        ],
      ),
    );
  }
}

void navigateToSearchResults(BuildContext context, dynamic decodedData) {
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (context) => ResultPage(data: decodedData),
    ),
  );
}

Future<dynamic> getData(String name) async {
  String url =
      'https://techvilla-server-mannat.onrender.com/search-products?name=$name';

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

class Carousel extends StatefulWidget {
  // Replace with a list of valid image URLs
  final List<String> imageUrls = const [
    'https://img.freepik.com/free-vector/flat-design-healthy-food-twitch-banner-template_23-2149154109.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/002/795/895/small/landing-page-banner-advertising-for-downloading-app-for-mobile-phone-3d-double-smartphone-device-mockup-download-buttons-with-scan-qr-code-template-vector.jpg',
    'https://shopney.co/blog/content/images/2019/10/opt_mobile-app-banner.png',
  ];

  const Carousel({super.key});

  @override
  State<Carousel> createState() => _CarouselState();
}

class _CarouselState extends State<Carousel> {
  @override
  Widget build(BuildContext context) {
    return FlutterCarousel(
      options: CarouselOptions(
        height: 400.0, // Adjust height as needed
        autoPlay: true,
        autoPlayInterval: const Duration(seconds: 2),
        showIndicator: true,
        slideIndicator: CircularSlideIndicator(),
      ),
      items: widget.imageUrls.map((imageUrl) {
        return Builder(
          builder: (BuildContext context) {
            return Container(
              width: MediaQuery.of(context).size.width,
              margin: EdgeInsets.symmetric(horizontal: 5.0),
              child: ClipRRect(
                // Wrap with ClipRRect
                borderRadius: BorderRadius.circular(20.0),
                child: Image.network(
                  imageUrl,
                  fit: BoxFit.cover, // Adjust as needed (cover, contain, etc.)
                  errorBuilder: (context, error, stackTrace) =>
                      const Center(child: CircularProgressIndicator()),
                ),
              ),
            );
          },
        );
      }).toList(),
    );
  }
}
