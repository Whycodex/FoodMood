const antwerp = require("./antwerp");
const chicago = require("./chicago");
const toronto = require("./toronto");
const san_francisco = require("./san_francisco");

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "41.878113,-87.629799": chicago,
  "37.7749295,-122.4194155": san_francisco,
};

const mockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdqvF6EEfKmtvVD4fwkM9Nn1AeA9L53ASWQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiw70wCzhX3xbtXooEra2sQj_eFwmttByjg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLF2BNOYLUEihB-10Yedyc1072X_Gz9p3lxQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6hpNUAxv3ExgQdPA1XOM1bgnzIujrL9pEw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODCfS1p33GbsxfBj-3_AGGmB2jfXgqynwXw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdqvF6EEfKmtvVD4fwkM9Nn1AeA9L53ASWQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagCksUkS5oruinwbA_hUkCai0111WbR7_TQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgL_ztzhDHp4lKQOmx3p6C41zmQv2tbu3KA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTRWZhVq5EPvPZevTaclimtvNV7hZro3vxQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2Pyw6ux6B0KU5hcZGe4CsQW-SSYi8IvgQ&usqp=CAU",
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  restaurant.photos = [randomImage];
  return restaurant;
};
