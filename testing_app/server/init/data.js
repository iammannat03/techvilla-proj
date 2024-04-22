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
      names: ["Monosodium Glutamate"],

      descriptions: [
        "Monosodium glutamate (MSG) is a flavor enhancer commonly added to processed foods. Excessive consumption may cause adverse reactions in some individuals.",
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
      "https://example.com/lays-magic-masala-image1.jpg",
      "https://example.com/lays-magic-masala-image2.jpg",
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
      names: ["Edible Vegetable Oil"],

      descriptions: [
        "Edible vegetable oil, when consumed in excessive amounts, may contribute to health issues due to its high-fat content.",
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
      "https://example.com/kurkure-image1.jpg",
      "https://example.com/kurkure-image2.jpg",
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
      names: [
        "Hydrolyzed Vegetable Protein",
        "Yeast Extract Powder",
        "Silicon Dioxide",
      ],
      descriptions: [
        "Hydrolyzed vegetable protein is a flavor enhancer. Excessive consumption may not be suitable for individuals sensitive to glutamic acid.",
        "Yeast extract powder is used as a flavor enhancer. Some people may be sensitive to it.",
        "Silicon dioxide is an anti-caking agent used in food processing.",
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
      "https://example.com/too-yumm-namkeen-image1.jpg",
      "https://example.com/too-yumm-namkeen-image2.jpg",
    ],
  },
  {
    name: "Beyond Snack Kerala Banana Chips",
    barcode: "501520957278",
    description: "Delicious banana chips from Kerala",
    category: "Chips",
    ingredients: ["Banana", "Coconut Oil", "Salt"],
    harmful_substances: {
      names: [null],

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
      "https://example.com/beyond-snack-banana-chips-image1.jpg",
      "https://example.com/beyond-snack-banana-chips-image2.jpg",
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
      "https://example.com/gooddiet-multigrain-chips-image1.jpg",
      "https://example.com/gooddiet-multigrain-chips-image2.jpg",
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
      "https://example.com/red-bull-image1.jpg",
      "https://example.com/red-bull-image2.jpg",
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
      "https://example.com/zero-sugar-pepsi-black-image1.jpg",
      "https://example.com/zero-sugar-pepsi-black-image2.jpg",
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
      names: [null],

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
      "https://example.com/sugarcane-juice-image1.jpg",
      "https://example.com/sugarcane-juice-image2.jpg",
    ],
  },
  {
    name: "Storia 100% Tender Coconut Water",
    barcode: "539350357221",
    category: "Beverages",
    ingredients: ["Tender Coconut Water"],
    harmful_substances: {
      names: [null],

      descriptions: [],
    },
    nutritional_information: {
      calories: 40,
      serving_size: "240ml",
      summary:
        "Storia 100% Tender Coconut Water is a refreshing and hydrating beverage with no added harmful substances.",
    },
    images: ["https://example.com/storia-coconut-water-image.jpg"],
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
