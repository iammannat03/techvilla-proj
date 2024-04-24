import 'package:flutter/material.dart';
import 'package:healthyscan/screens/homepage.dart';
// import 'package:healthyscan/screens/products.dart';
import 'package:healthyscan/screens/result.dart';
import 'package:healthyscan/screens/test_screen.dart';

void main() => runApp(healthyScan());

class healthyScan extends StatelessWidget {
  const healthyScan({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: homePage(),
      routes: {
        // "result": (context) => ResultPage(),
        // "products": (context) => ProductSearchPage()
      },
    );
  }
}
