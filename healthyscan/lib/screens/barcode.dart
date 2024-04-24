import 'package:flutter/material.dart';
import 'package:simple_barcode_scanner/simple_barcode_scanner.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:healthyscan/screens/result.dart';

class BarcodeScannerButton extends StatefulWidget {
  final String imageUrl;
  final double size;

  const BarcodeScannerButton(
      {Key? key, required this.imageUrl, this.size = 150.0})
      : super(key: key);

  @override
  State<BarcodeScannerButton> createState() => _BarcodeScannerButtonState();
}

class _BarcodeScannerButtonState extends State<BarcodeScannerButton> {
  String result = '';

  navigateToSearchResults(BuildContext context, dynamic decodedData) async {
    try {
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => ResultPage(data: decodedData),
        ),
      );
    } catch (error) {
      print('Error navigating to results page: $error');
      // Display an error message to the user (optional)
    }
  }

  Future<dynamic> getData(String barcode) async {
    String url = 'https://techvilla-server-mannat.onrender.com/$barcode';
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final data = response.body;
      if (data.isNotEmpty) {
        // Check if data is not empty
        var decodedData = jsonDecode(data);
        print(decodedData[0]);
      } else {
        print('Empty response from API'); // Handle empty response
      }
    } else {
      print('Request failed with status: ${response.statusCode}');
    }
    return response;
  }

  Widget build(BuildContext context) {
    return Stack(
      children: [
        InkWell(
          onTap: () async {
            var res = await Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const SimpleBarcodeScannerPage(),
                ));
            setState(() {
              if (res is String) {
                result = res;
                print(result);
                final searchTerm = result;
                getData(searchTerm).then((response) {
                  if (response.statusCode == 200) {
                    final decodedData = jsonDecode(response.body);
                    navigateToSearchResults(context, decodedData);
                  } else {
                    print('Request failed with status: ${response.statusCode}');
                  }
                });
              }
            });
          },
          child: Container(
            width: widget.size,
            height: widget.size,
            decoration: BoxDecoration(
              shape: BoxShape.circle, // Make the button circular
              image: DecorationImage(
                image: NetworkImage(widget.imageUrl),
                fit: BoxFit.cover, // Cover the entire button area
              ),
            ),
          ),
        ),
        Positioned(
          bottom: 0.0, // Position text at bottom
          right: 0.0,
          left: 5.0, // Position text at right
          child: Container(
            padding: const EdgeInsets.all(5.0), // Add padding around text
            color: Colors.black54, // Semi-transparent black background
            child: Center(
              child: Text(
                'Scan Barcode',
                style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    color: Colors.white,
                    fontSize: 16.0), // White text
              ),
            ),
          ),
        ),
      ],
    );
  }
}
