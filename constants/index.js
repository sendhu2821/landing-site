const navLinks = [
  {
    id: "cakes",
    title: "Cakes",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "craft",
    title: "The Craft",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cakeLists = [
  {
    name: "Velvet Bloom",
    country: "US",
    detail: "Slice",
    price: "$5",
  },
  {
    name: "Choco Charm",
    country: "US",
    detail: "Slice",
    price: "$6",
  },
  {
    name: "Berry Delight",
    country: "FR",
    detail: "6 inch",
    price: "$18",
  },
  {
    name: "Lemon Crave",
    country: "IT",
    detail: "8 inch",
    price: "$22",
  },
];

const pastryLists = [
  {
    name: "Vanilla Dream",
    country: "US",
    detail: "Slice",
    price: "$4",
  },
  {
    name: "Tiramisu Bliss",
    country: "IT",
    detail: "Slice",
    price: "$6",
  },
  {
    name: "Cocoa Tart",
    country: "FR",
    detail: "Mini",
    price: "$3",
  },
  {
    name: "Strawberry Glaze",
    country: "JP",
    detail: "Mini",
    price: "$3",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Freshly baked daily",
  "Artfully decorated",
  "Fluffy and moist layers",
  "Whipped to perfection",
];

const goodLists = [
  "Premium ingredients only",
  "Time-honored recipes",
  "Crafted by master bakers",
  "Made with love and butter",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "123, Cakewalk Street, Indiranagar, Bengaluru, KA 560038",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@hoopaloopa.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCakes = [
  {
    id: 1,
    name: "Strawberry Swirl",
    image: "/images/drink1.png",
    title: "Classic Flavors, Modern Twist",
    description:
      "A delightful mix of soft sponge and fresh strawberries, topped with whipped cream. A classic made to impress any sweet tooth.",
  },
  {
    id: 2,
    name: "Choco Lava Delight",
    image: "/images/drink2.png",
    title: "Indulgence in Every Layer",
    description:
      "Warm molten chocolate at the center, surrounded by moist cocoa sponge. A must-try for all chocolate lovers.",
  },
  {
    id: 3,
    name: "Vanilla Raspberry Bliss",
    image: "/images/drink3.png",
    title: "Fresh, Fruity, and Fluffy",
    description:
      "Light vanilla layers filled with raspberry jam and buttercream. Balanced sweetness and texture in every bite.",
  },
  {
    id: 4,
    name: "Caramel Crunch Stack",
    image: "/images/drink4.png",
    title: "Golden Layers, Sweet Finish",
    description:
      "Caramel-infused sponge layered with toffee cream and topped with a crunchy nut topping. Rich, smooth, and satisfying.",
  },
];

export {
  navLinks,
  cakeLists,
  pastryLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCakes,
};
