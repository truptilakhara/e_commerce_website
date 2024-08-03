const products = [
  {
    id: 1,
    name: "Thermocol Packaging Sheet",
    description: "High-quality thermocol sheet for packaging.",
    price: 150,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/3/400322629/AA/NG/WW/2536835/eps-thermocol-sheet-1000x1000.jpg",
      "https://tiimg.tistatic.com/fp/1/007/940/10-mm-thickness-white-thermocol-sheet-for-packaging-use-088.jpg",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/packaging-security-bag/x/t/x/12-x-14-6-thermocol-sheets-for-packing-and-crafting-purposes-original-imagygezpfxvkfcg.jpeg?q=70&crop=false",
    ],
    stock: 100,
    specifications: {
      dimensions: "100x50x10 cm",
      weight: "500g",
    },
    category: "Packaging",
    reviews: [
      {
        user: "John Doe",
        rating: 4,
        comment: "Good quality product.",
      },
      {
        user: "Sara Lee",
        rating: 5,
        comment: "Excellent for my packaging needs. Very sturdy!",
      },
      {
        user: "Michael Brown",
        rating: 3,
        comment: "The sheets are fine, but they could be a bit thicker.",
      },
    ],
  },
  {
    id: 2,
    name: "Thermocol Decorative Ball",
    description: "Decorative thermocol balls for craft and decoration.",
    price: 50,
    images: [
      "https://images.picxy.com/cache/2022/1/20/f6736dd590e09d5bd7d79add0e83ead9.webp",
      "https://www.shutterstock.com/image-photo/candy-multi-color-260nw-1134937496.jpg",
      "https://cpimg.tistatic.com/05341793/b/4/FR-Fire-Retardant-Thermocol-Balls.jpg",
    ],
    stock: 200,
    specifications: {
      dimensions: "10x10x10 cm",
      weight: "50g",
    },
    category: "Decoration",
    reviews: [
      {
        user: "Jane Smith",
        rating: 5,
        comment: "Perfect for my project!",
      },
      {
        user: "Emily Johnson",
        rating: 4,
        comment: "Nice decorative balls, but the color options are limited.",
      },
      {
        user: "David Wilson",
        rating: 4,
        comment: "Great for craft projects. They hold paint well.",
      },
    ],
  },
  {
    id: 3,
    name: "Thermocol Insulation Panel",
    description: "Durable thermocol panels for insulation purposes.",
    price: 300,
    images: [
      "https://shethinsulations.in/wp-content/uploads/2020/07/1.1-Thermocole-Board.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2J9-VYMcRYHK5oV96oDMXcnPW8_Ja49w9Q&s",
    ],
    stock: 50,
    specifications: {
      dimensions: "120x60x5 cm",
      weight: "700g",
    },
    category: "Construction",
    reviews: [
      {
        user: "Alice Johnson",
        rating: 4,
        comment: "Great for insulation!",
      },
      {
        user: "Robert Martinez",
        rating: 5,
        comment: "Excellent insulation properties. Highly recommended.",
      },
      {
        user: "Linda Carter",
        rating: 3,
        comment: "Decent product, but the delivery was delayed.",
      },
    ],
  },
  {
    id: 4,
    name: "Thermocol Craft Sheet",
    description: "Lightweight and easy-to-cut thermocol sheets for crafts.",
    price: 80,
    images: [
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/silhouette-paper/b/n/v/na-20-jr-original-imaghy56exp4h6k2.jpeg?q=90&crop=false",
      "https://m.media-amazon.com/images/I/41zyXU68KpL._AC_UF1000,1000_QL80_.jpg",
    ],
    stock: 150,
    specifications: {
      dimensions: "50x50x5 cm",
      weight: "300g",
    },
    category: "Craft",
    reviews: [
      {
        user: "Bob Martin",
        rating: 5,
        comment: "Perfect for school projects!",
      },
      {
        user: "Rachel Adams",
        rating: 4,
        comment: "Good quality for craft use. Easy to cut and shape.",
      },
      {
        user: "William Lee",
        rating: 4,
        comment: "Very versatile. Used it for several art projects.",
      },
    ],
  },
  {
    id: 5,
    name: "Thermocol Box",
    description: "Sturdy thermocol box for storage and shipping.",
    price: 120,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2020/9/VE/QC/JF/2348916/expanded-polystyrene-thermocol-box.jpg",
      "https://5.imimg.com/data5/JE/TH/MY-6978602/thermocol-ice-boxes.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSew1LNf4zb2fHbgEa21xlKRCxLR7Wtn7hPzQ&s",
    ],
    stock: 80,
    specifications: {
      dimensions: "30x30x30 cm",
      weight: "400g",
    },
    category: "Packaging",
    reviews: [
      {
        user: "Mark Williams",
        rating: 5,
        comment: "Excellent for shipping fragile items.",
      },
      {
        user: "Olivia Brown",
        rating: 4,
        comment: "Very sturdy and reliable. Will order again.",
      },
      {
        user: "James Wilson",
        rating: 3,
        comment: "The box is good, but the price is a bit high.",
      },
    ],
  },
  {
    id: 6,
    name: "Thermocol Ceiling Tiles",
    description: "Lightweight and decorative ceiling tiles.",
    price: 250,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0La7RAa4SSjndnQlM686voq5UoHXM2keYg&s",
      "https://5.imimg.com/data5/BR/RO/MY-37174478/thermocol-false-ceiling.jpg",
    ],
    stock: 60,
    specifications: {
      dimensions: "60x60x2 cm",
      weight: "350g",
    },
    category: "Construction",
    reviews: [
      {
        user: "Laura Davis",
        rating: 4,
        comment: "Easy to install and looks great.",
      },
      {
        user: "George Walker",
        rating: 5,
        comment: "Perfect for my home renovation project. Very satisfied.",
      },
      {
        user: "Nina Green",
        rating: 3,
        comment: "Tiles are good but a bit difficult to cut.",
      },
    ],
  },
  {
    id: 7,
    name: "Thermocol Balls for Bean Bags",
    description: "Soft and durable thermocol balls for bean bags.",
    price: 100,
    images: [
      "https://5.imimg.com/data5/UI/OE/UE/SELLER-1668252/1kg-thermocol-bean-balls-250x250.jpg",
      "image14.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLuysehme9ul9NLX99Wr8DXArgu11UjJLQw&s",
    ],
    stock: 120,
    specifications: {
      dimensions: "5 mm diameter",
      weight: "1 kg",
    },
    category: "Furniture",
    reviews: [
      {
        user: "Tom Harris",
        rating: 5,
        comment: "Very comfortable and long-lasting.",
      },
      {
        user: "Jessica Lewis",
        rating: 4,
        comment: "Great for bean bags. A bit more expensive than expected.",
      },
      {
        user: "Daniel King",
        rating: 4,
        comment: "Good quality, but the packaging could be improved.",
      },
    ],
  },
  {
    id: 8,
    name: "Thermocol Ice Box",
    description: "Insulated thermocol ice box for keeping items cool.",
    price: 180,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMEKLSDnWJiD012N7Y6dHx_3mWK3xYQvVZg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsW-YJ2e-iosZFkIreiJZZlXjhgruByBRoA&s",
    ],
    stock: 90,
    specifications: {
      dimensions: "40x40x40 cm",
      weight: "1 kg",
    },
    category: "Packaging",
    reviews: [
      {
        user: "Emma Brown",
        rating: 4,
        comment: "Keeps ice solid for hours.",
      },
      {
        user: "Mason Young",
        rating: 5,
        comment: "Great for transporting chilled goods. Very effective.",
      },
      {
        user: "Sophia Evans",
        rating: 4,
        comment: "Works well, but could be improved with a better handle.",
      },
    ],
  },
  {
    id: 9,
    name: "Thermocol Model Base",
    description: "Solid thermocol base for building models and projects.",
    price: 60,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MdDtS-KwuduY6bTMPDM5CEJpXvrJI-3H8g&s",
      "https://images.jdmagicbox.com/rep/b2b/thermocol-model/thermocol-model-1.jpg",
    ],
    stock: 110,
    specifications: {
      dimensions: "30x30x2 cm",
      weight: "250g",
    },
    category: "Craft",
    reviews: [
      {
        user: "Sophia Clark",
        rating: 5,
        comment: "Ideal for school projects and model building.",
      },
      {
        user: "Ethan Roberts",
        rating: 4,
        comment: "Good quality. Easy to work with.",
      },
      {
        user: "Ava Martinez",
        rating: 4,
        comment:
          "Very useful for crafting. Slightly more expensive than similar products.",
      },
    ],
  },
  {
    id: 10,
    name: "Thermocol Sheets for Art",
    description: "High-density thermocol sheets for artistic use.",
    price: 70,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItrTkHA9pYFYpmckUuOzchy3dqUO9oEm2Vw&s",
    ],
    stock: 130,
    specifications: {
      dimensions: "40x40x3 cm",
      weight: "350g",
    },
    category: "Craft",
    reviews: [
      {
        user: "Liam White",
        rating: 4,
        comment: "Perfect for making 3D art.",
      },
      {
        user: "Olivia Taylor",
        rating: 5,
        comment: "Fantastic quality and easy to shape for art projects.",
      },
      {
        user: "Noah Anderson",
        rating: 4,
        comment:
          "Very good for crafting. Arrived a bit bent, but straightened out easily.",
      },
    ],
  },
];

export default products;
