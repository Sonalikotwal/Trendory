const products = [
  {
    name: "Floral Dress",
    price: 1299,
    img1: "https://th.bing.com/th/id/OIP.aGGFjd6Au4vcCsmJ93F7PgHaLT",
    img2: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/29866349/2024/5/31/ec1d795d-8f8b-410c-a621-0ca67abd408e1717141961714PANITFloralPrintGeorgetteMaxiDress1.jpg"
  },
  {
    name: "Kurti Set",
    price: 1499,
    img1: "https://static3.azafashions.com/uploads/product_gallery/1694773829434_1.jpg",
    img2: "https://static3.azafashions.com/uploads/product_gallery/1694773829434_1.jpg"
  },
  {
    name: "Saree",
    price: 1999,
    img1: "https://static3.azafashions.com/uploads/product_gallery/1-0379440001683102711.jpg",
    img2: "https://static3.azafashions.com/uploads/product_gallery/1-0379440001683102711.jpg"
  },
  {
    name: "Lehenga",
    price: 5999,
    img1: "https://prevasu.in/cdn/shop/files/PREVASU-18-03-248515.jpg?v=1714038184&width=1080",
    img2: "https://th.bing.com/th/id/R.dfebabee8574126ed57c9735f260e60f?rik=uHFyh9k8kf1A8w&riu=http%3a%2f%2fwww.fabiliciousfashion.com%2fcdn%2fshop%2ffiles%2fhot-pink-embroidered-silk-lehengalehengaprevasu-694233.jpg%3fv%3d1718196391&ehk=H85j9JdWKbxg04J6EDZAngQFLsyM%2fm3bwqIpwIg0hvc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "Crop Top",
    price: 699,
    img1: "https://www.selfieleslie.com.au/cdn/shop/products/62504B01_RED-1.jpg",
    img2: "https://www.selfieleslie.com.au/cdn/shop/products/62504B01_RED-1.jpg"
  },
  {
    name: "Palazzo Set",
    price: 1199,
    img1: "https://i.pinimg.com/originals/ae/da/58/aeda58daa752dcdb3341485976c50b93.jpg",
    img2: "https://i.pinimg.com/originals/ae/da/58/aeda58daa752dcdb3341485976c50b93.jpg"
  },
  {
    name: "Maxi Dress",
    price: 1599,
    img1: "https://www.stylestate.com.au/media/catalog/product/cache/eb5d134715e137451832c6afa656ed39/s/d/sdr1657a_pink_3.jpg",
    img2: "https://th.bing.com/th/id/R.211f8592315ebd0e6e0fb48468b7c9cc"
  },
  {
    name: "Denim Jacket",
    price: 1999,
    img1: "https://n.nordstrommedia.com/id/sr3/f0e89b31-74d2-46fb-a88b-f6a69aa910af.jpeg",
    img2: "https://n.nordstrommedia.com/id/sr3/f0e89b31-74d2-46fb-a88b-f6a69aa910af.jpeg"
  },
  {
    name: "Hoodie",
    price: 1499,
    img1: "https://n.nordstrommedia.com/it/1e591cad-af95-489e-ac2d-e708cea39b69.jpeg",
    img2: "https://n.nordstrommedia.com/it/1e591cad-af95-489e-ac2d-e708cea39b69.jpeg"
  },
  {
    name: "T-Shirt",
    price: 499,
    img1: "https://tse3.mm.bing.net/th/id/OIP.yG_1FMFpatoZ5NJ30W-mlAHaJ4",
    img2: "https://tse3.mm.bing.net/th/id/OIP.yG_1FMFpatoZ5NJ30W-mlAHaJ4"
  },
  {
    name: "Jeans",
    price: 1499,
    img1: "https://mediahub.debenhams.com/gzz77429_light%20blue_xl",
    img2: "https://mediahub.debenhams.com/gzz77429_light%20blue_xl"
  },
  {
    name: "Skirt",
    price: 899,
    img1: "https://i.etsystatic.com/5609612/r/il/ff4da2/1355394143/il_1588xN.1355394143_pufl.jpg",
    img2: "https://i.etsystatic.com/5609612/r/il/ff4da2/1355394143/il_1588xN.1355394143_pufl.jpg"
  },
  {
    name: "Jumpsuit",
    price: 1899,
    img1: "https://tse4.mm.bing.net/th/id/OIP.XnxkRgXKtPHHGegf2t3bPgHaLH",
    img2: "https://tse4.mm.bing.net/th/id/OIP.XnxkRgXKtPHHGegf2t3bPgHaLH"
  },
  {
    name: "Blazer",
    price: 2999,
    img1: "https://static3.azafashions.com/uploads/product_gallery/1685456260735_1.JPG",
    img2: "https://static3.azafashions.com/uploads/product_gallery/1685456260735_1.JPG"
  },
  {
    name: "Party Gown",
    price: 3499,
    img1: "https://www.selfieleslie.com/cdn/shop/files/SLD6930_20WINE-4_1365x2048.jpg",
    img2: "https://www.selfieleslie.com/cdn/shop/files/SLD6930_20WINE-4_1365x2048.jpg"
  },
  {
    name: "Night Suit",
    
    price: 999,
    img1: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16404670/2022/7/13/7e0ae164-c748-4981-a4b6-8f414d2ef0a81657686314772beebelleWomenPinkPrintedNightsuit1.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/16404670/2022/7/13/7e0ae164-c748-4981-a4b6-8f414d2ef0a81657686314772beebelleWomenPinkPrintedNightsuit1.jpg"
  },
  {
    name: "Co-ord Set",
    price: 1799,
    img1: "https://i.pinimg.com/originals/ff/b1/d2/ffb1d24d79da7a0b86dbbbedcf032c17.jpg",
    img2: "https://i.pinimg.com/originals/ff/b1/d2/ffb1d24d79da7a0b86dbbbedcf032c17.jpg"
  },
  {
    name: "Sweater",
    price: 1399,
    img1: "https://i.pinimg.com/originals/1b/1c/1f/1b1c1f4e886b3da9d09c04168203835f.jpg",
    img2: "https://i.pinimg.com/originals/1b/1c/1f/1b1c1f4e886b3da9d09c04168203835f.jpg"
  },
  {
    name: "Shrug",
    price: 799,
    img1: "https://th.bing.com/th/id/R.14df1cd0aad9645d2d8755213f533a11?rik=h%2f%2ffAqC%2ff0VUuQ&riu=http%3a%2f%2ffabcurate.com%2fcdn%2fshop%2ffiles%2fSHRG0004_4.jpg%3fv%3d1683116732&ehk=MAJLcdhZuwkBhh9S4%2bt7CLn55xfzBFyy3f4mP4LW0pE%3d&risl=&pid=ImgRaw&r=0",
    img2: "https://th.bing.com/th/id/R.0e99287d2e147ede038b59dd1c98b724"
  },
  {
    name: "Tank Top",
    price: 399,
    img1: "https://www.gluestore.com.au/cdn/shop/products/20211207-IMG_1825_2048x.jpg?v=1638936176",
    img2: "https://th.bing.com/th/id/R.13ec66f0f8c4d603a27ff0fb014735f3"
  }
];

