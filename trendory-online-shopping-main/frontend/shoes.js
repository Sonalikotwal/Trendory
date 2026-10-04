const products = [
  {
    name: "Heels",
    price: 1999,
    img1: "https://i.pinimg.com/originals/1a/b3/57/1ab357e7159604cafb85e611d6b5c07e.jpg",
    img2: "https://i.pinimg.com/originals/1a/b3/57/1ab357e7159604cafb85e611d6b5c07e.jpg"
  },
  {
    name: "Black Heels",
    price: 1799,
    img1: "https://i.pinimg.com/736x/ff/1d/44/ff1d4491d47cf467045ab1d73831ffe7.jpg",
    img2: "https://i.pinimg.com/736x/ff/1d/44/ff1d4491d47cf467045ab1d73831ffe7.jpg"
  },
  {
    name: "Stilettos",
    price: 2499,
    img1: "https://img.ltwebstatic.com/images3_pi/2023/05/09/16836371320cca0f1b6dca1ac15074ba28ca5a8bfb_thumbnail_900x.jpg",
    img2: "https://img.ltwebstatic.com/images3_pi/2023/05/09/16836371320cca0f1b6dca1ac15074ba28ca5a8bfb_thumbnail_900x.jpg"
  },
  {
    name: "Flats",
    price: 999,
    img1: "https://i.pinimg.com/originals/aa/1e/1f/aa1e1fa5ca849d5f01bde4cfe70758a5.jpg",
    img2: "https://i.pinimg.com/originals/aa/1e/1f/aa1e1fa5ca849d5f01bde4cfe70758a5.jpg"
  },
  {
    name: "Ballet Shoes",
    price: 1199,
    img1: "https://img.ltwebstatic.com/images3_pi/2024/02/26/3a/1708946105b014b31b098ad36aeb8a92d981d0faca_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2024/02/26/3a/1708946105b014b31b098ad36aeb8a92d981d0faca_thumbnail_900x.webp"
  },
  {
    name: "Sandals",
    price: 899,
    img1: "https://img.ltwebstatic.com/images3_pi/2024/04/09/79/1712594859daa1ab02637ae02a3b50344d558d58eb_thumbnail_900x.jpg",
    img2: "https://img.ltwebstatic.com/images3_pi/2024/04/09/79/1712594859daa1ab02637ae02a3b50344d558d58eb_thumbnail_900x.jpg"
  },
  {
    name: "Ethnic Sandals",
    price: 999,
    img1: "https://glamstory.co.in/cdn/shop/files/GSLJ236_1_852a3cb0-65ae-4776-929d-cb9815fefefb.jpg",
    img2: "https://glamstory.co.in/cdn/shop/files/GSLJ236_1_852a3cb0-65ae-4776-929d-cb9815fefefb.jpg"
  },
  {
    name: "Sneakers",
    price: 1999,
    img1: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2024/SEPTEMBER/19/O7Wdn26m_85714380b8c34afc8bfc70fa5ef68897.jpg",
    img2: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2024/SEPTEMBER/19/O7Wdn26m_85714380b8c34afc8bfc70fa5ef68897.jpg"
  },
  {
    name: "Running Shoes",
    price: 1799,
    img1: "https://img.ltwebstatic.com/images3_pi/2024/04/29/6c/17143959740cd1b8c9f812243c442c021c9dd5f523_thumbnail_900x.jpg",
    img2: "https://img.ltwebstatic.com/images3_pi/2024/04/29/6c/17143959740cd1b8c9f812243c442c021c9dd5f523_thumbnail_900x.jpg"
  },
  {
    name: "Casual Shoes",
    price: 1399,
    img1: "https://i5.walmartimages.com/asr/d9ae15b5-8312-46e8-9953-890a81983c15.05e9e44444383a4c8acdbf3a8b42c4c4.jpeg",
    img2: "https://i5.walmartimages.com/asr/d9ae15b5-8312-46e8-9953-890a81983c15.05e9e44444383a4c8acdbf3a8b42c4c4.jpeg"
  },
  {
    name: "Boots",
    price: 2999,
    img1: "https://img.ltwebstatic.com/images3_pi/2023/09/23/65/169545131727b29d024cd9cd0b65bf2563f67de211_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2023/09/23/65/169545131727b29d024cd9cd0b65bf2563f67de211_thumbnail_900x.webp"
  },
  {
    name: "Ankle Boots",
    price: 2799,
    img1: "https://tse3.mm.bing.net/th/id/OIP.bmaKD4Qcx-uYo2gIa_SW2QHaKX",
    img2: "https://tse3.mm.bing.net/th/id/OIP.bmaKD4Qcx-uYo2gIa_SW2QHaKX"
  },
  {
    name: "Flip Flops",
    price: 499,
    img1: "https://img.ltwebstatic.com/images3_pi/2024/03/05/13/1709650434ce8f4fcf447a2408979fb8fa6125f6b7_thumbnail_900x.jpg",
    img2: "https://img.ltwebstatic.com/images3_pi/2024/03/05/13/1709650434ce8f4fcf447a2408979fb8fa6125f6b7_thumbnail_900x.jpg"
  },
  {
    name: "Slippers",
    price: 699,
    img1: "https://tse1.explicit.bing.net/th/id/OIP.gaU0S81MIykpEnEx1-GCHAHaJ2",
    img2: "https://tse1.explicit.bing.net/th/id/OIP.gaU0S81MIykpEnEx1-GCHAHaJ2"
  },
  {
    name: "Party Heels",
    price: 2299,
    img1: "https://tse4.mm.bing.net/th/id/OIP.WitZmXfIBantwCYdvHosggHaJn",
    img2: "https://tse4.mm.bing.net/th/id/OIP.WitZmXfIBantwCYdvHosggHaJn"
  },
  {
    name: "Wedges",
    price: 1899,
    img1: "https://i.pinimg.com/originals/aa/04/55/aa045547616e6546361b0c60dfbdd386.jpg",
    img2: "https://i.pinimg.com/originals/aa/04/55/aa045547616e6546361b0c60dfbdd386.jpg"
  },
  {
    name: "Loafers",
    price: 1499,
    img1: "https://img.ltwebstatic.com/images3_spmp/2024/05/15/98/1715762966e65cadcfd1997e32db7e4ff7a71063b8_thumbnail_900x.jpg",
    img2: "https://img.ltwebstatic.com/images3_spmp/2024/05/15/98/1715762966e65cadcfd1997e32db7e4ff7a71063b8_thumbnail_900x.jpg"
  },
  {
    name: "Canvas Shoes",
    price: 1699,
    img1: "https://img.ltwebstatic.com/images3_spmp/2024/10/10/24/17285631050b32d5dc3cb3958cacfbae5d1dbeb242_thumbnail_900x.jpg",
    img2: "https://img.ltwebstatic.com/images3_spmp/2024/10/10/24/17285631050b32d5dc3cb3958cacfbae5d1dbeb242_thumbnail_900x.jpg"
  },
  {
    name: "Slip-ons",
    price: 1199,
    img1: "https://img.ltwebstatic.com/images3_pi/2023/05/22/1684736583f23344295433679f3ae76ea4483c82fb_thumbnail_900x.webp",
    img2: "https://img.ltwebstatic.com/images3_pi/2023/05/22/1684736583f23344295433679f3ae76ea4483c82fb_thumbnail_900x.webp"
  },
  {
    name: "Trainers",
    price: 1999,
    img1: "https://i.pinimg.com/originals/3c/aa/6a/3caa6ad6f8d93f7529db04a0b4325000.jpg",
    img2: "https://i.pinimg.com/originals/3c/aa/6a/3caa6ad6f8d93f7529db04a0b4325000.jpg"
  }
];