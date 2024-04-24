import 'package:flutter/material.dart';
import 'package:pie_chart/pie_chart.dart';
import '../widgets/widgets.dart';
import 'package:healthyscan/screens/homepage.dart';

class ResultPage extends StatefulWidget {
  final dynamic data;
  const ResultPage({super.key, required this.data});

  @override
  State<ResultPage> createState() => _ResultPageState();
}

class _ResultPageState extends State<ResultPage> {
  @override
  @override
  Widget build(BuildContext context) {
    String name = widget.data[0]['name'];
    String desc = widget.data[0]['description'];
    List<dynamic> ingredients = widget.data[0]['ingredients'];
    String image = widget.data[0]["images"][0];
    List<dynamic> harmfulSubstances =
        widget.data[0]["harmful_substances"]['names'];
    List<dynamic> harmfuldesc =
        widget.data[0]['harmful_substances']['descriptions'];
    String combinedDescription = "";
    for (String description in harmfuldesc) {
      combinedDescription +=
          description + "\n"; // Add newline character for separation
    }
    String subs = "";
    for (String description in harmfulSubstances) {
      subs += description + ","; // Add newline character for separation
    }
    String ingr = "";
    for (String description in ingredients) {
      ingr += description + ","; // Add newline character for separation
    }
    final onPressedFunctions = [
      () => Navigator.pushNamed(context, 'products'),
      () => Navigator.pushNamed(context, 'products'), // Example navigation
      () => Navigator.pushNamed(
          context, 'products'), // No function for the third image
      () => Navigator.pushNamed(context, 'products')
    ];

    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.white,
        //separation
        body: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 100,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Container(
                      width: 50,
                      child: IconButton(
                        onPressed: () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => homePage()),
                          );
                        },
                        icon: const Icon(
                          Icons.arrow_back,
                          size: 20,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    Container(
                      child: Image.asset(
                        'assets/icon.png',
                        height: 50,
                        width: 150, // Fixed width
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                child: Row(
                  children: [
                    Expanded(
                      child: Container(
                        child: Positioned(
                          child: Stack(
                            children: [
                              Container(
                                // Set width or use double.infinity if needed
                                width: 250.0, // Adjust as needed
                                child: Image.network('$image', height: 300),
                                height: 300,
                              ),
                              Positioned(
                                right: 10.0, // Adjust spacing from right edge
                                bottom: 10.0, // Adjust spacing from bottom edge
                                child: Container(
                                  // Adjust size to fit within available space
                                  width: 80.0, // Adjust size
                                  height: 80.0, // Adjust size
                                  child: ClipRRect(
                                    // Clip if image overflows container
                                    borderRadius: BorderRadius.circular(
                                        10.0), // Optional rounded corners
                                    child: Image.network(
                                        'https://raw.githubusercontent.com/iammannat03/techvilla-proj/main/testing_app/server/assets/hf-3.png'),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        height: 300,
                        width: 100,
                      ),
                    ),
                    Expanded(
                      child: Container(
                          height: 300,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Flexible(
                                child: Text(
                                  '$name',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                              Flexible(
                                child: SizedBox(
                                  height: 15,
                                ),
                              ),
                              Flexible(
                                child: Text(
                                  '$desc',
                                  style: const TextStyle(fontSize: 14.0),
                                ),
                              ),
                              Flexible(
                                child: SizedBox(
                                  height: 30,
                                ),
                              ),
                              Flexible(child: ShopButton()),
                            ],
                          )),
                    )
                  ],
                ),
              ),
              SizedBox(
                height: 30,
              ),
              CustomDivider(
                text: "Nutritional Analysis",
              ),
              SizedBox(
                height: 16,
              ),
              PieChart(
                dataMap: dataMap,
                chartRadius: 200,
              ),
              SizedBox(
                height: 30,
              ),
              CustomDivider(
                text: "Ingredients",
              ),
              ExpandableCard(
                title: 'Ingredients',
                content: '$ingr',
              ),
              ExpandableCard(
                title: 'Harmful Content',
                content: '$subs\n\n**$combinedDescription',
              ),
              SizedBox(
                height: 40,
              ),
              CustomDivider(
                text: "Healthier Alternatives",
              ),
              SizedBox(
                height: 18,
              ),
              Padding(
                padding: const EdgeInsets.only(left: 12),
                child: FourImageBoxes(
                  imageUrls: [
                    'https://m.media-amazon.com/images/I/61XV5GOIpqL._AC_UF1000,1000_QL80_.jpg',
                    'https://www.bigbasket.com/media/uploads/p/l/20004319_6-wai-wai-ready-to-eat-noodles-veg-masala.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJK9tMEb1JGGmqq1YkpPqudsOYhtcMG_esDfbZD5PlA&s',
                    'https://m.media-amazon.com/images/I/718bT19y+eL.jpg',
                  ],
                  onPressed: onPressedFunctions,
                  imageTexts: [
                    'Aata Noodles',
                    'Wai Wai',
                    'Patanjali Noodles',
                    'Ragi Noodles',
                  ],
                ),
              ),
              SizedBox(
                height: 32,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
