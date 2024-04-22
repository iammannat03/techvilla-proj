const data = [
  //chips
  {
    name: "Lays Potato Chips - India's Magic Masala",
    barcode: "838914951289",
    description: "Flavorful potato chips with a blend of Indian spices",
    category: "Chips",
    ingredients: [
      "Potatoes",
      "Vegetable Oil",
      "Spices (including cumin, coriander, chili, turmeric, ginger, garlic)",
      "Salt",
      "Sugar",
      "Onion Powder",
      "Tomato Powder",
      "Natural and Artificial Flavors (including monosodium glutamate)",
    ],
    harmful_substances: {
      names: [
        "Monosodium Glutamate",
        "Yeast Extract Powder",
        "Silicon Dioxide",
      ],

      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
        "Yeast extract powder is used as a flavor enhancer. Some people may be sensitive to it.",
        "Silicon dioxide is an anti-caking agent used in food processing.",
      ],
    },
    nutritional_information: {
      calories: 160,
      serving_size: "28g",
      details: "Per 1 oz (about 28g) serving",
      summary:
        "Lays Potato Chips - India's Magic Masala are a delicious snack with a blend of Indian spices. They contain monosodium glutamate (MSG) as an artificial flavor enhancer and should be consumed in moderation.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht8WIaEJPEy-oH6HZf3VcOeqe2S0IBkaCNlrgxq1uRw&s",
    ],
  },
  {
    name: "Kurkure Masala Munch",
    barcode: "935555854278",
    description: "Crunchy snack with spicy masala flavor",
    category: "Chips",
    ingredients: [
      "Corn Meal",
      "Edible Vegetable Oil",
      "Gram Meal",
      "Spices & Condiments",
      "Sugar",
      "Salt",
      "Citric Acid",
      "Asafoetida",
    ],
    harmful_substances: {
      names: [
        "Edible Vegetable Oil",
        "Yeast Extract Powder",
        "Silicon Dioxide",
      ],

      descriptions: [
        "Edible vegetable oil, when consumed in excessive amounts, may contribute to health issues due to its high-fat content.",
        "Yeast extract powder is used as a flavor enhancer. Some people may be sensitive to it.",
        "Silicon dioxide is an anti-caking agent used in food processing.",
      ],
    },
    nutritional_information: {
      calories: 150,
      serving_size: "30g",
      details: "Per 100g serving",
      summary:
        "Kurkure Masala Munch is a crunchy snack with a spicy masala flavor. It provides energy and some essential nutrients but should be consumed in moderation due to its high-fat content.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRU4wVqRdtPmE5mmRLYGdPmrDoZdjoa1X4w&s",
    ],
  },
  {
    name: "Too Yumm! Noodle Masala Flavour Karare Namkeen",
    barcode: "970284957219",
    description: "Crunchy and flavorful snack with masala noodle flavor",
    category: "Chips",
    ingredients: [
      "Rice Flour",
      "Edible Vegetable Oil",
      "Corn Flour",
      "Gram Flour",
      "Spices & Condiments",
      "Salt",
      "Sugar",
      "Red Chilli Powder",
      "Citric Acid",
      "Tomato Powder",
      "Onion Powder",
      "Garlic Powder",
      "Hydrolyzed Vegetable Protein",
      "Yeast Extract Powder",
      "Malic Acid (INS 296)",
      "Silicon Dioxide (INS 551)",
      "Edible Common Salt",
    ],
    harmful_substances: {
      names: ["Hydrolyzed Vegetable Protein"],
      descriptions: [
        "Hydrolyzed vegetable protein is a flavor enhancer. Excessive consumption may not be suitable for individuals sensitive to glutamic acid.",
      ],
    },
    nutritional_information: {
      calories: 150,
      serving_size: "30g",
      details: "Per 30g serving",
      summary:
        "Too Yumm! Noodle Masala Flavour Karare Namkeen is a crunchy and tasty snack, rich in flavors. It should be enjoyed in moderation as part of a balanced diet.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4t4Kqok2VdxdsXmUmxt61O2xy675M2RLcA&s",
    ],
  },
  {
    name: "Beyond Snack Kerala Banana Chips",
    barcode: "501520957278",
    description: "Delicious banana chips from Kerala",
    category: "Chips",
    ingredients: ["Banana", "Coconut Oil", "Salt"],
    harmful_substances: {
      names: [],

      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 150,
      serving_size: "30g",
      details: "Per 100g serving",
      summary:
        "Beyond Snack Kerala Banana Chips are a tasty and wholesome snack option, providing energy and essential nutrients. They are free from harmful substances and can be enjoyed as part of a balanced diet.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wjUWz4dYGQ5GPkQKh45Qslg3rdclchnN0Q&s",
    ],
  },
  {
    name: "GoodDiet Multigrain Chips - Sour Cream & Onion",
    barcode: "218324657214",
    description: "Multigrain chips with sour cream and onion flavor",
    category: "Chips",
    ingredients: [
      "Whole Grain Corn",
      "Whole Grain Wheat",
      "Whole Grain Rice",
      "Sunflower Oil",
      "Sour Cream & Onion Seasoning (Maltodextrin, Salt, Sugar, Natural Flavors, Onion Powder, Sour Cream Powder, Garlic Powder, Yeast Extract, Citric Acid, Lactic Acid, Sunflower Oil)",
    ],
    harmful_substances: {
      names: ["Maltodextrin"],

      descriptions: [
        "Maltodextrin is a common food additive used as a thickener or filler in processed foods. It is generally considered safe, but consuming large amounts may cause digestive issues in sensitive individuals.",
      ],
    },
    nutritional_information: {
      calories: 150,
      serving_size: "28g",
      details: "Per 28g serving",
      summary:
        "GoodDiet Multigrain Chips - Sour Cream & Onion are a tasty snack option made with whole grains and flavorful seasoning. Enjoy in moderation as part of a balanced diet.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWJbHUAyxSOjAOZjwG1DfPJ9prT5wqS6sNjqGRAqj8vubPvMNjrKc&usqp=CAE&s",
    ],
  },
  // drinks
  {
    name: "Red Bull",
    barcode: "425583456262",
    description: "Energy drink with a refreshing taste",
    category: "Beverages",
    ingredients: [
      "Carbonated Water",
      "Sucrose",
      "Glucose",
      "Citric Acid",
      "Taurine",
      "Sodium Bicarbonate",
      "Magnesium Carbonate",
      "Caffeine",
      "Niacinamide",
      "Calcium Pantothenate",
      "Pyridoxine HCl",
      "Vitamin B12",
      "Natural and Artificial Flavors",
      "Colors",
    ],
    harmful_substances: {
      names: ["Caffeine", "Sucrose", "Glucose"],

      descriptions: [
        "Caffeine in moderate amounts can provide a temporary energy boost but may cause side effects like increased heart rate and jitteriness in sensitive individuals.",
        "Sucrose and glucose are simple sugars. Excessive consumption can contribute to weight gain and other health issues.",
      ],
    },
    nutritional_information: {
      calories: 110,
      serving_size: "250ml",
      details: "Per 100ml serving",
      summary:
        "Red Bull is an energy drink that provides a quick energy boost, primarily due to caffeine and sugars. It should be consumed in moderation to avoid potential side effects.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFL7CjbS7aIXGuotpIoKLH0okV3AcXd_-GXg&s",
    ],
  },
  {
    name: "Zero Sugar Pepsi Black",
    barcode: "558587855258",
    description: "Refreshing cola drink with zero sugar",
    category: "Beverages",
    ingredients: [
      "Carbonated Water",
      "Caramel Color",
      "Phosphoric Acid",
      "Natural Flavors",
      "Caffeine",
      "Potassium Benzoate",
      "Sucralose",
      "Acesulfame Potassium",
      "Citric Acid",
      "Sodium Citrate",
    ],
    harmful_substances: {
      names: ["Sucralose", "Acesulfame Potassium"],

      descriptions: [
        "Sucralose is a non-nutritive sweetener that may have potential side effects if consumed in large amounts, including digestive issues and metabolic effects.",
        "Acesulfame Potassium is a non-caloric artificial sweetener. While considered safe for consumption, some studies suggest possible health concerns related to long-term use.",
      ],
    },
    nutritional_information: {
      calories: 0,
      serving_size: "355ml",
      details: "Per 355ml can",
      summary:
        "Zero Sugar Pepsi Black is a calorie-free cola drink that provides the classic Pepsi taste without added sugar. It contains artificial sweeteners and should be consumed in moderation.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcFKADiMs3c5wwqqTnyRxUpSw2QzlVIt6EQ&s",
    ],
  },
  {
    name: "Cold Extracted Juice - Basics Sugarcane",
    barcode: "354421758226",
    description:
      "Pure and refreshing juice made from cold extracted sugarcane.",
    category: "Beverages",
    ingredients: ["Sugarcane"],
    harmful_substances: {
      names: [],

      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 120,
      serving_size: "250ml",
      details: "Per 100ml serving",
      summary:
        "Cold Extracted Juice - Basics Sugarcane is a natural and healthy beverage, providing energy and essential nutrients with no harmful substances.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0gcaxTEPo4pTn2koSiIPHQVX84HdzUPLKA&s",
    ],
  },
  {
    name: "Storia 100% Tender Coconut Water",
    barcode: "539350357221",
    category: "Beverages",
    ingredients: ["Tender Coconut Water"],
    harmful_substances: {
      names: [],

      descriptions: [],
    },
    nutritional_information: {
      calories: 40,
      serving_size: "240ml",
      summary:
        "Storia 100% Tender Coconut Water is a refreshing and hydrating beverage with no added harmful substances.",
    },
    images: [
      "https://tiimg.tistatic.com/fp/1/008/308/fresh-and-good-for-health-coconut-water-for-skin-393.jpg",
    ],
  },
  {
    name: "Coca-Cola Classic",
    barcode: "123456789012",
    description: "Classic cola drink with a refreshing taste",
    category: "Beverages",
    ingredients: [
      "Carbonated Water",
      "High Fructose Corn Syrup",
      "Caramel Color",
      "Phosphoric Acid",
      "Natural Flavors",
      "Caffeine",
    ],
    harmful_substances: {
      names: ["High Fructose Corn Syrup"],

      descriptions: [
        "High fructose corn syrup is a sweetener commonly used in processed foods and beverages. Excessive consumption may contribute to weight gain and other health issues.",
      ],
    },
    nutritional_information: {
      calories: 140,
      serving_size: "355ml",
      details: "Per 12 fl oz serving",
      summary:
        "Coca-Cola Classic is a popular cola drink with a refreshing taste. It contains high fructose corn syrup and should be consumed in moderation.",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0aeES24b2iqMrbYuLPiSyDMsijbQ1iELNw&s",
    ],
  },
  {
    name: "Oreo Chocolate Sandwich Cookies",
    barcode: "123456789012",
    description: "Classic chocolate sandwich cookies with a creamy filling",
    category: "Biscuits",
    ingredients: [
      "Wheat Flour",
      "Sugar",
      "Palm Oil",
      "Cocoa Powder",
      "High Fructose Corn Syrup",
      "Salt",
      "Leavening Agents",
      "Soy Lecithin",
      "Artificial Flavors",
    ],
    harmful_substances: {
      names: ["High Fructose Corn Syrup"],
      descriptions: [
        "High fructose corn syrup is a sweetener commonly used in processed foods and beverages. Excessive consumption may contribute to weight gain and other health issues.",
      ],
    },
    nutritional_information: {
      calories: 160,
      serving_size: "3 cookies",
      details: "Per serving",
      summary:
        "Oreo Chocolate Sandwich Cookies are a classic favorite with a creamy filling. They contain high fructose corn syrup and should be consumed in moderation.",
    },
    images: [
      "https://example.com/oreo-image1.jpg",
      "https://example.com/oreo-image2.jpg",
    ],
  },
  {
    name: "Digestive Biscuits",
    barcode: "234567890123",
    description:
      "Crunchy biscuits made with whole wheat flour and a hint of sweetness",
    category: "Biscuits",
    ingredients: [
      "Whole Wheat Flour",
      "Sugar",
      "Palm Oil",
      "Invert Sugar Syrup",
      "Leavening Agents",
      "Salt",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 120,
      serving_size: "2 biscuits",
      details: "Per serving",
      summary:
        "Digestive Biscuits are a wholesome and crunchy snack made with whole wheat flour. They are free from harmful substances and can be enjoyed as part of a balanced diet.",
    },
    images: [
      "https://example.com/digestive-biscuits-image1.jpg",
      "https://example.com/digestive-biscuits-image2.jpg",
    ],
  },
  {
    name: "Shortbread Cookies",
    barcode: "345678901234",
    description: "Buttery and crumbly cookies with a rich flavor",
    category: "Biscuits",
    ingredients: ["Wheat Flour", "Butter", "Sugar", "Salt"],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 160,
      serving_size: "2 cookies",
      details: "Per serving",
      summary:
        "Shortbread Cookies are a delicious treat with a buttery and crumbly texture. They are free from harmful substances and can be enjoyed as an indulgent snack.",
    },
    images: [
      "https://example.com/shortbread-cookies-image1.jpg",
      "https://example.com/shortbread-cookies-image2.jpg",
    ],
  },
  {
    name: "Chocolate Chip Cookies",
    barcode: "456789012345",
    description:
      "Classic cookies with chocolate chips for a sweet and indulgent treat",
    category: "Biscuits",
    ingredients: [
      "Wheat Flour",
      "Sugar",
      "Butter",
      "Chocolate Chips",
      "Eggs",
      "Vanilla Extract",
      "Baking Soda",
      "Salt",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 150,
      serving_size: "2 cookies",
      details: "Per serving",
      summary:
        "Chocolate Chip Cookies are a timeless favorite with the perfect balance of sweetness and chocolate. They are free from harmful substances and can be enjoyed as a delightful snack.",
    },
    images: [
      "https://example.com/chocolate-chip-cookies-image1.jpg",
      "https://example.com/chocolate-chip-cookies-image2.jpg",
    ],
  },
  {
    name: "Gingerbread Cookies",
    barcode: "567890123456",
    description: "Spiced cookies with a warm and comforting flavor",
    category: "Biscuits",
    ingredients: [
      "Wheat Flour",
      "Sugar",
      "Butter",
      "Molasses",
      "Eggs",
      "Spices (Ginger, Cinnamon, Cloves)",
      "Baking Soda",
      "Salt",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 120,
      serving_size: "2 cookies",
      details: "Per serving",
      summary:
        "Gingerbread Cookies are a festive treat with a delightful blend of spices. They are free from harmful substances and can be enjoyed during the holiday season or any time of the year.",
    },
    images: [
      "https://example.com/gingerbread-cookies-image1.jpg",
      "https://example.com/gingerbread-cookies-image2.jpg",
    ],
  },
  {
    name: "Maggi 2-Minute Noodles - Masala",
    barcode: "123456789012",
    description: "Instant noodles with a spicy masala flavor",
    category: "Noodles",
    ingredients: [
      "Noodles (Wheat Flour, Palm Oil, Salt, Wheat Gluten)",
      "Spices (Coriander, Cumin, Turmeric, Fenugreek, Ginger, Garlic, Black Pepper, Cloves)",
      "Salt",
      "Sugar",
      "Onion Powder",
      "Garlic Powder",
      "Yeast Extract",
      "Acidity Regulators (Citric Acid, Sodium Bicarbonate)",
      "Flavor Enhancers (Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate)",
      "Edible Vegetable Oil",
      "Antioxidant (TBHQ)",
    ],
    harmful_substances: {
      names: ["Monosodium Glutamate", "TBHQ"],
      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
        "TBHQ (tert-Butylhydroquinone) is a food preservative. While considered safe for consumption, some studies suggest potential health concerns related to long-term use.",
      ],
    },
    nutritional_information: {
      calories: 380,
      serving_size: "70g",
      details: "Per serving",
      summary:
        "Maggi 2-Minute Noodles - Masala is a popular instant noodle option with a spicy masala flavor. It contains monosodium glutamate (MSG) and TBHQ as additives and should be consumed in moderation.",
    },
    images: [
      "https://example.com/maggi-masala-noodles-image1.jpg",
      "https://example.com/maggi-masala-noodles-image2.jpg",
    ],
  },
  {
    name: "Yippee Noodles - Magic Masala",
    barcode: "234567890123",
    description: "Instant noodles with a magical masala flavor",
    category: "Noodles",
    ingredients: [
      "Noodles (Wheat Flour, Palm Oil, Salt, Wheat Gluten)",
      "Spices (Coriander, Cumin, Turmeric, Fenugreek, Ginger, Garlic, Black Pepper, Cloves)",
      "Salt",
      "Sugar",
      "Onion Powder",
      "Garlic Powder",
      "Yeast Extract",
      "Acidity Regulators (Citric Acid, Sodium Bicarbonate)",
      "Flavor Enhancers (Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate)",
      "Edible Vegetable Oil",
      "Antioxidant (TBHQ)",
    ],
    harmful_substances: {
      names: ["Monosodium Glutamate", "TBHQ"],
      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
        "TBHQ (tert-Butylhydroquinone) is a food preservative. While considered safe for consumption, some studies suggest potential health concerns related to long-term use.",
      ],
    },
    nutritional_information: {
      calories: 380,
      serving_size: "70g",
      details: "Per serving",
      summary:
        "Yippee Noodles - Magic Masala is an instant noodle option with a magical masala flavor. It contains monosodium glutamate (MSG) and TBHQ as additives and should be consumed in moderation.",
    },
    images: [
      "https://example.com/yippee-magic-masala-noodles-image1.jpg",
      "https://example.com/yippee-magic-masala-noodles-image2.jpg",
    ],
  },
  {
    name: "Top Ramen Noodles - Curry",
    barcode: "345678901234",
    description: "Instant noodles with a flavorful curry taste",
    category: "Noodles",
    ingredients: [
      "Noodles (Wheat Flour, Palm Oil, Salt, Wheat Gluten)",
      "Spices (Coriander, Cumin, Turmeric, Fenugreek, Ginger, Garlic, Black Pepper, Cloves)",
      "Salt",
      "Sugar",
      "Onion Powder",
      "Garlic Powder",
      "Yeast Extract",
      "Acidity Regulators (Citric Acid, Sodium Bicarbonate)",
      "Flavor Enhancers (Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate)",
      "Edible Vegetable Oil",
      "Antioxidant (TBHQ)",
    ],
    harmful_substances: {
      names: ["Monosodium Glutamate", "TBHQ"],
      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
        "TBHQ (tert-Butylhydroquinone) is a food preservative. While considered safe for consumption, some studies suggest potential health concerns related to long-term use.",
      ],
    },
    nutritional_information: {
      calories: 380,
      serving_size: "70g",
      details: "Per serving",
      summary:
        "Top Ramen Noodles - Curry is an instant noodle option with a flavorful curry taste. It contains monosodium glutamate (MSG) and TBHQ as additives and should be consumed in moderation.",
    },
    images: [
      "https://example.com/top-ramen-curry-noodles-image1.jpg",
      "https://example.com/top-ramen-curry-noodles-image2.jpg",
    ],
  },
  {
    name: "Knorr Soupy Noodles - Mast Masala",
    barcode: "456789012345",
    description: "Instant soupy noodles with a mast masala flavor",
    category: "Noodles",
    ingredients: [
      "Noodles (Wheat Flour, Palm Oil, Salt, Wheat Gluten)",
      "Spices (Coriander, Cumin, Turmeric, Fenugreek, Ginger, Garlic, Black Pepper, Cloves)",
      "Salt",
      "Sugar",
      "Onion Powder",
      "Garlic Powder",
      "Yeast Extract",
      "Acidity Regulators (Citric Acid, Sodium Bicarbonate)",
      "Flavor Enhancers (Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate)",
      "Edible Vegetable Oil",
      "Antioxidant (TBHQ)",
    ],
    harmful_substances: {
      names: ["Monosodium Glutamate", "TBHQ"],
      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
        "TBHQ (tert-Butylhydroquinone) is a food preservative. While considered safe for consumption, some studies suggest potential health concerns related to long-term use.",
      ],
    },
    nutritional_information: {
      calories: 380,
      serving_size: "70g",
      details: "Per serving",
      summary:
        "Knorr Soupy Noodles - Mast Masala is an instant soupy noodle option with a mast masala flavor. It contains monosodium glutamate (MSG) and TBHQ as additives and should be consumed in moderation.",
    },
    images: [
      "https://example.com/knorr-mast-masala-noodles-image1.jpg",
      "https://example.com/knorr-mast-masala-noodles-image2.jpg",
    ],
  },
  {
    name: "Ching's Secret Noodles - Schezwan",
    barcode: "567890123456",
    description: "Instant noodles with a spicy Schezwan flavor",
    category: "Noodles",
    ingredients: [
      "Noodles (Wheat Flour, Palm Oil, Salt, Wheat Gluten)",
      "Spices (Schezwan Pepper, Garlic, Ginger, Onion, Red Chilli, Coriander, Cumin, Turmeric)",
      "Salt",
      "Sugar",
      "Onion Powder",
      "Garlic Powder",
      "Yeast Extract",
      "Acidity Regulators (Citric Acid, Sodium Bicarbonate)",
      "Flavor Enhancers (Monosodium Glutamate, Disodium Inosinate, Disodium Guanylate)",
      "Edible Vegetable Oil",
      "Antioxidant (TBHQ)",
    ],
    harmful_substances: {
      names: ["Monosodium Glutamate", "TBHQ"],
      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
        "TBHQ (tert-Butylhydroquinone) is a food preservative. While considered safe for consumption, some studies suggest potential health concerns related to long-term use.",
      ],
    },
    nutritional_information: {
      calories: 380,
      serving_size: "70g",
      details: "Per serving",
      summary:
        "Ching's Secret Noodles - Schezwan is an instant noodle option with a spicy Schezwan flavor. It contains monosodium glutamate (MSG) and TBHQ as additives and should be consumed in moderation.",
    },
    images: [
      "https://example.com/chings-schezwan-noodles-image1.jpg",
      "https://example.com/chings-schezwan-noodles-image2.jpg",
    ],
  },
  {
    name: "Cadbury Dairy Milk",
    barcode: "678901234567",
    description: "Creamy milk chocolate bar",
    category: "Sweets & Chocolate",
    ingredients: [
      "Milk Solids",
      "Sugar",
      "Cocoa Butter",
      "Cocoa Solids",
      "Emulsifiers",
      "Flavors",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 240,
      serving_size: "40g",
      details: "Per serving",
      summary:
        "Cadbury Dairy Milk is a classic milk chocolate bar that can be enjoyed as a sweet treat.",
    },
    images: [
      "https://example.com/cadbury-dairy-milk-image1.jpg",
      "https://example.com/cadbury-dairy-milk-image2.jpg",
    ],
  },
  {
    name: "Ferrero Rocher",
    barcode: "789012345678",
    description: "Hazelnut-filled chocolate balls",
    category: "Sweets & Chocolate",
    ingredients: [
      "Milk Chocolate",
      "Hazelnuts",
      "Sugar",
      "Palm Oil",
      "Wheat Flour",
      "Whey Powder",
      "Cocoa Powder",
      "Emulsifiers",
      "Flavors",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 73,
      serving_size: "1 piece",
      details: "Per serving",
      summary:
        "Ferrero Rocher is a luxurious chocolate treat with a crunchy hazelnut center.",
    },
    images: [
      "https://example.com/ferrero-rocher-image1.jpg",
      "https://example.com/ferrero-rocher-image2.jpg",
    ],
  },
  {
    name: "Hershey's Kisses",
    barcode: "890123456789",
    description: "Small milk chocolate candies",
    category: "Sweets & Chocolate",
    ingredients: [
      "Milk Chocolate",
      "Sugar",
      "Cocoa Butter",
      "Milk",
      "Cocoa Processed with Alkali",
      "Lecithin",
      "Vanillin",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 22,
      serving_size: "1 piece",
      details: "Per serving",
      summary:
        "Hershey's Kisses are bite-sized milk chocolate candies that are perfect for snacking.",
    },
    images: [
      "https://example.com/hersheys-kisses-image1.jpg",
      "https://example.com/hersheys-kisses-image2.jpg",
    ],
  },
  {
    name: "Kit Kat",
    barcode: "901234567890",
    description: "Crisp wafer fingers covered in milk chocolate",
    category: "Sweets & Chocolate",
    ingredients: [
      "Sugar",
      "Wheat Flour",
      "Cocoa Butter",
      "Cocoa Mass",
      "Whole Milk Powder",
      "Lactose",
      "Emulsifiers",
      "Flavors",
      "Yeast",
      "Salt",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 210,
      serving_size: "1 bar",
      details: "Per serving",
      summary:
        "Kit Kat is a popular chocolate bar with crispy wafer fingers that can be enjoyed one at a time or all at once.",
    },
    images: [
      "https://example.com/kit-kat-image1.jpg",
      "https://example.com/kit-kat-image2.jpg",
    ],
  },
  {
    name: "M&M's",
    barcode: "012345678901",
    description: "Colorful milk chocolate candies with a candy shell",
    category: "Sweets & Chocolate",
    ingredients: [
      "Milk Chocolate",
      "Sugar",
      "Cocoa Mass",
      "Skim Milk",
      "Cocoa Butter",
      "Lactose",
      "Milkfat",
      "Soy Lecithin",
      "Salt",
      "Artificial Flavors",
      "Coloring Agents",
    ],
    harmful_substances: {
      names: [],
      descriptions: ["This product does not contain any harmful substances."],
    },
    nutritional_information: {
      calories: 210,
      serving_size: "1 pack",
      details: "Per serving",
      summary:
        "M&M's are colorful milk chocolate candies that are fun to eat and come in a variety of flavors.",
    },
    images: [
      "https://example.com/mms-image1.jpg",
      "https://example.com/mms-image2.jpg",
    ],
  },
];

module.exports = { data: data };

// const dt = {
//
//   name: string,

//   description: string(optional),
//   category: string,
//   ingredients: [string], // List of ingredients
//   harmful_substances: {
//     names: [string], // List of harmful substance names

//     descriptions: [string], // List of corresponding descriptions
//   },
//   nutritional_information: {
//     calories: number,
//     serving_size: string,
//     details: string(optional), // Textual details for chart generation
//     summary: string, // Summary of nutritional value
//   },
//   images: [string](optional), // List of image URLs
// };
