/* ========================================
   MEESHO — script.js
   ======================================== */

// ========== PRODUCT DATA (75+ items) ==========
const products = [
  // Women Ethnic (12)
  { id:1,  brand:"Libas",       name:"Floral Printed Anarkali Kurti",     price:349,  mrp:899,  off:61, rating:4.3, reviews:"12.4k", img:"https://www.libas.in/cdn/shop/files/99047O_2Main_a02fca91-59a8-441f-b971-11d24a123eb4.jpg?v=1755945152&width=540", sizes:["XS","S","M","L","XL"], category:"women-ethnic" },
  { id:2,  brand:"BIBA",        name:"Ethnic Wear Straight Kurta",        price:499,  mrp:1199, off:58, rating:4.5, reviews:"8.2k",  img:"https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwabf4a7d7/images/aw25/vinwin30555aw25blu_1.jpg?sw=502&sh=753&q=100&strip=false", sizes:["S","M","L","XL","XXL"], category:"women-ethnic" },
  { id:3,  brand:"Shree",       name:"Silk Blend Saree With Blouse",      price:799,  mrp:2499, off:68, rating:4.4, reviews:"5.6k",  img:"https://assets0.mirraw.com/images/11423772/image_zoom.jpeg?1681966968", sizes:["Free Size"], category:"women-ethnic" },
  { id:4,  brand:"Fabindia",    name:"Handloom Cotton Lehenga Choli",     price:1299, mrp:3499, off:63, rating:4.5, reviews:"3.4k",  img:"https://tse2.mm.bing.net/th/id/OIP.vVhqlLODjlZFnAz6KWx1bwHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["S","M","L","XL"], category:"women-ethnic" },
  { id:5,  brand:"Anouk",       name:"Banarasi Silk Saree",               price:1499, mrp:4999, off:70, rating:4.6, reviews:"4.1k",  img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_75,w_1080/v1/assets/images/29492078/2024/5/11/c1e9c0bb-49bf-4bbe-a198-702999ef332e1715429270716AnoukPurpleSilkBlendEthnicWovenDesignTraditionalWearSareewit1.jpg", sizes:["Free Size"], category:"women-ethnic" },
  { id:6,  brand:"W",           name:"Printed A-line Kurta",              price:599,  mrp:1499, off:60, rating:4.2, reviews:"6.8k",  img:"https://tse1.mm.bing.net/th/id/OIP.TytB0J_F8NFxqDAfNiIy_wHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["S","M","L","XL"], category:"women-ethnic" },
  { id:7,  brand:"Aurelia",     name:"Embroidered Salwar Suit Set",       price:899,  mrp:2299, off:61, rating:4.4, reviews:"3.9k",  img:"https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=480&fit=crop", sizes:["S","M","L","XL"], category:"women-ethnic" },
  { id:8,  brand:"Soch",        name:"Designer Georgette Saree",          price:1099, mrp:2999, off:63, rating:4.3, reviews:"2.7k",  img:"https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/a/tr:h-400,w-300,cm-pad_resize/ca58dd3SO-SRPXDESR15895-Black_1.jpg?rnd=20200526195200", sizes:["Free Size"], category:"women-ethnic" },
  { id:9,  brand:"Vishudh",     name:"Cotton Anarkali Kurti Set",         price:649,  mrp:1599, off:59, rating:4.1, reviews:"4.5k",  img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/29799798/2024/5/27/f51ac879-ab60-4cf5-bcdb-ccc18078ef091716806880117VishudhWomenFloralPrintedRegularPureCottonKurtawithTrousersW6.jpg", sizes:["S","M","L","XL"], category:"women-ethnic" },
  { id:10, brand:"Sangria",     name:"Patiala Suit With Dupatta",         price:799,  mrp:1999, off:60, rating:4.2, reviews:"3.2k",  img:"https://th.bing.com/th/id/OIP.4ZclgPXOItJMEjGOSXa7RQHaJ4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["S","M","L","XL","XXL"], category:"women-ethnic" },
  { id:11, brand:"Janasya",     name:"Printed Straight Kurta",            price:399,  mrp:999,  off:60, rating:4.0, reviews:"7.1k",  img:"https://th.bing.com/th/id/OIP.Pxa1gR6kkjld1pXLTADaywHaJ4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["S","M","L","XL"], category:"women-ethnic" },
  { id:12, brand:"Indo Era",    name:"Bridal Lehenga Choli",              price:2999, mrp:7999, off:62, rating:4.7, reviews:"1.8k",  img:"https://tse1.mm.bing.net/th/id/OIP.IYLA8iUwWHfuz_h1UwnvgQHaKt?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["S","M","L","XL"], category:"women-ethnic" },

  // Women Western (10)
  { id:13, brand:"H&M",         name:"Women Floral Midi Dress",           price:999,  mrp:2499, off:60, rating:4.1, reviews:"9.8k",  img:"https://tse3.mm.bing.net/th/id/OIP.0N6kjhQjkuZLlZgz9ZuYrAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["XS","S","M","L"], category:"women-western" },
  { id:14, brand:"Mast & Harbour", name:"Women Regular Fit Hoodie",       price:799,  mrp:1799, off:56, rating:4.3, reviews:"7.2k",  img:"https://tse3.mm.bing.net/th/id/OIP.eHR9hjs4q2crUCQiBSyN5QHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["XS","S","M","L","XL"], category:"women-western" },
  { id:15, brand:"Zara",        name:"High Waist Wide Leg Jeans",         price:1899, mrp:3990, off:52, rating:4.3, reviews:"8.9k",  img:"https://tse1.mm.bing.net/th/id/OIP.sElV1Oy9zX01g13JRdJZbQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["26","28","30","32"], category:"women-western" },
  { id:16, brand:"Forever 21",  name:"Crop Top With Skirt Set",           price:899,  mrp:2199, off:59, rating:4.2, reviews:"5.6k",  img:"https://tse4.mm.bing.net/th/id/OIP.dB6gUsPziztxRMMjzcFQCwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", sizes:["XS","S","M","L"], category:"women-western" },
  { id:17, brand:"ONLY",        name:"Solid Fit & Flare Dress",           price:1199, mrp:2799, off:57, rating:4.4, reviews:"4.3k",  img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_75,w_1080/v1/assets/images/2108650/2017/10/7/11507368407284-ONLY-Women-Red-Solid-Fit-and-Flare-Dress-7121507368407005-1.jpg", sizes:["XS","S","M","L","XL"], category:"women-western" },
  { id:18, brand:"Levi's",      name:"Women Skinny Fit Jeans",            price:1599, mrp:3499, off:54, rating:4.5, reviews:"11.2k", img:"https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=480&fit=crop", sizes:["26","28","30","32","34"], category:"women-western" },
  { id:19, brand:"Vero Moda",   name:"Casual Printed Top",                price:499,  mrp:1299, off:62, rating:4.1, reviews:"6.4k",  img:"https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=480&fit=crop", sizes:["XS","S","M","L"], category:"women-western" },
  { id:20, brand:"Tokyo Talkies", name:"Co-ord Set Top & Pant",           price:1099, mrp:2599, off:58, rating:4.0, reviews:"3.8k",  img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/28035886/2024/3/5/bb163b29-0b13-4b53-9c46-665f16721c661709629715693TokyoTalkiesWomenWhiteCrochetTopWidelegPantShrugCo-Ord1.jpg", sizes:["S","M","L","XL"], category:"women-western" },
  { id:21, brand:"Trend Arrest", name:"Bodycon Party Dress",              price:799,  mrp:1999, off:60, rating:4.2, reviews:"5.1k",  img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/24397422/2023/8/8/482e5f7e-dd84-415d-ad38-42ccb81558e81691480917886TrendArrestBlueEmbellishedNetBodyconDress1.jpg", sizes:["XS","S","M","L"], category:"women-western" },
  { id:22, brand:"Roadster",    name:"Oversized Sweatshirt",              price:699,  mrp:1599, off:56, rating:4.3, reviews:"8.4k",  img:"https://assets.myntassets.com/assets/images/22875024/2023/10/6/ea9b6887-af7e-4501-915b-25b63a0ef16f1696571946218-Roadster-Women-Sweatshirts-1661696571945863-1.jpg", sizes:["S","M","L","XL"], category:"women-western" },

  // Men (10)
  { id:23, brand:"Roadster",    name:"Men Regular Fit Cotton T-Shirt",    price:249,  mrp:599,  off:58, rating:4.2, reviews:"34.1k", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=480&fit=crop", sizes:["S","M","L","XL"], category:"men" },
  { id:24, brand:"Allen Solly", name:"Men Slim Fit Formal Shirt",         price:699,  mrp:1599, off:56, rating:4.6, reviews:"22.3k", img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=480&fit=crop", sizes:["S","M","L","XL","XXL"], category:"men" },
  { id:25, brand:"Levi's",      name:"Men Slim Fit Mid Rise Jeans",       price:1499, mrp:3499, off:57, rating:4.4, reviews:"28.6k", img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=480&fit=crop", sizes:["28","30","32","34","36"], category:"men" },
  { id:26, brand:"H&M",         name:"Men Casual Hoodie",                 price:899,  mrp:1999, off:55, rating:4.3, reviews:"9.7k",  img:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=480&fit=crop", sizes:["S","M","L","XL"], category:"men" },
  { id:27, brand:"Peter England", name:"Men Formal Trousers",             price:999,  mrp:2199, off:54, rating:4.4, reviews:"7.3k",  img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=480&fit=crop", sizes:["30","32","34","36","38"], category:"men" },
  { id:28, brand:"Manyavar",    name:"Men Ethnic Kurta Pyjama Set",       price:1299, mrp:2999, off:56, rating:4.5, reviews:"5.6k",  img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=480&fit=crop", sizes:["S","M","L","XL","XXL"], category:"men" },
  { id:29, brand:"U.S. Polo",   name:"Men Polo Neck T-Shirt",             price:599,  mrp:1499, off:60, rating:4.4, reviews:"15.2k", img:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=480&fit=crop", sizes:["S","M","L","XL"], category:"men" },
  { id:30, brand:"Wrangler",    name:"Men Denim Jacket",                  price:1799, mrp:3999, off:55, rating:4.3, reviews:"4.2k",  img:"https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=480&fit=crop", sizes:["S","M","L","XL"], category:"men" },
  { id:31, brand:"Park Avenue", name:"Men Printed Casual Shirt",          price:799,  mrp:1899, off:58, rating:4.2, reviews:"6.1k",  img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=480&fit=crop", sizes:["S","M","L","XL","XXL"], category:"men" },
  { id:32, brand:"Adidas",      name:"Men Track Pants",                   price:1199, mrp:2499, off:52, rating:4.5, reviews:"12.7k", img:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=480&fit=crop", sizes:["S","M","L","XL"], category:"men" },

  // Kids (8)
  { id:33, brand:"U.S. Polo",   name:"Boys Cotton Casual Shirt",          price:549,  mrp:1299, off:58, rating:4.4, reviews:"3.1k",  img:"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=480&fit=crop", sizes:["4-5Y","6-7Y","8-9Y","10-11Y"], category:"kids" },
  { id:34, brand:"Cherokee",    name:"Girls Floral Cotton Frock",         price:399,  mrp:899,  off:55, rating:4.2, reviews:"2.4k",  img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=480&fit=crop", sizes:["2-3Y","4-5Y","6-7Y","8-9Y"], category:"kids" },
  { id:35, brand:"Funskool",    name:"Educational Building Blocks Set",   price:299,  mrp:699,  off:57, rating:4.6, reviews:"5.7k",  img:"https://images.unsplash.com/photo-1558877385-8c1cab90ba0a?w=400&h=480&fit=crop", sizes:["One Size"], category:"kids" },
  { id:36, brand:"Mothercare",  name:"Baby Soft Toy Teddy Bear",          price:499,  mrp:999,  off:50, rating:4.7, reviews:"4.8k",  img:"https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&h=480&fit=crop", sizes:["One Size"], category:"kids" },
  { id:37, brand:"Hopscotch",   name:"Kids Printed T-Shirt Pack of 3",    price:599,  mrp:1499, off:60, rating:4.3, reviews:"3.6k",  img:"https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=400&h=480&fit=crop", sizes:["2-3Y","4-5Y","6-7Y"], category:"kids" },
  { id:38, brand:"Skybags",     name:"Kids School Backpack",              price:799,  mrp:1799, off:56, rating:4.4, reviews:"5.2k",  img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=480&fit=crop", sizes:["One Size"], category:"kids" },
  { id:39, brand:"Kookie Kids", name:"Girls Lehenga Choli Set",           price:899,  mrp:2199, off:59, rating:4.3, reviews:"2.1k",  img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&h=480&fit=crop", sizes:["2-3Y","4-5Y","6-7Y","8-9Y"], category:"kids" },
  { id:40, brand:"LEGO",        name:"City Police Station Building Set",  price:2499, mrp:4999, off:50, rating:4.8, reviews:"3.4k",  img:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=480&fit=crop", sizes:["One Size"], category:"kids" },

  // Home & Kitchen (8)
  { id:41, brand:"Story@home",  name:"Cotton Double Bedsheet With Pillow",price:649,  mrp:1799, off:64, rating:4.4, reviews:"21.3k", img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=480&fit=crop", sizes:["Queen","King"], category:"home" },
  { id:42, brand:"Prestige",    name:"Non-Stick Cookware Set 5 Pcs",      price:2199, mrp:4499, off:51, rating:4.5, reviews:"6.2k",  img:"https://images.unsplash.com/photo-1584990347449-a8d2b6e1f7d4?w=400&h=480&fit=crop", sizes:["One Size"], category:"home" },
  { id:43, brand:"Bombay Dyeing", name:"Designer Curtains Pack of 2",     price:899,  mrp:1999, off:55, rating:4.3, reviews:"7.6k",  img:"https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=400&h=480&fit=crop", sizes:["5ft","7ft","9ft"], category:"home" },
  { id:44, brand:"Trident",     name:"Premium Cotton Bath Towel Set",     price:799,  mrp:1599, off:50, rating:4.5, reviews:"8.9k",  img:"https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=480&fit=crop", sizes:["One Size"], category:"home" },
  { id:45, brand:"Hawkins",     name:"Pressure Cooker 3 Litre",           price:1499, mrp:2499, off:40, rating:4.6, reviews:"14.2k", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=480&fit=crop", sizes:["3L","5L"], category:"home" },
  { id:46, brand:"Cello",       name:"Plastic Storage Container Set",     price:599,  mrp:1299, off:54, rating:4.2, reviews:"5.8k",  img:"https://images.unsplash.com/photo-1584990347163-1d4a4ed7d6e7?w=400&h=480&fit=crop", sizes:["Set of 6"], category:"home" },
  { id:47, brand:"Solimo",      name:"Cushion Covers Pack of 5",          price:399,  mrp:999,  off:60, rating:4.3, reviews:"9.4k",  img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=480&fit=crop", sizes:["16x16"], category:"home" },
  { id:48, brand:"Milton",      name:"Insulated Water Bottle 1L",         price:599,  mrp:1199, off:50, rating:4.5, reviews:"11.6k", img:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=480&fit=crop", sizes:["1L"], category:"home" },

  // Beauty & Health (8)
  { id:49, brand:"Maybelline",  name:"Long Wear Matte Lipstick",          price:449,  mrp:999,  off:55, rating:4.2, reviews:"6.7k",  img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=480&fit=crop", sizes:["One Size"], category:"beauty" },
  { id:50, brand:"Lakme",       name:"Absolute Skin Gloss Foundation",    price:599,  mrp:1100, off:46, rating:4.3, reviews:"11.4k", img:"https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=400&h=480&fit=crop", sizes:["One Size"], category:"beauty" },
  { id:51, brand:"Nykaa",       name:"Liquid Eyeliner Pen",               price:299,  mrp:599,  off:50, rating:4.4, reviews:"8.2k",  img:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=480&fit=crop", sizes:["One Size"], category:"beauty" },
  { id:52, brand:"Mamaearth",   name:"Vitamin C Face Wash",               price:249,  mrp:399,  off:38, rating:4.5, reviews:"24.7k", img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=480&fit=crop", sizes:["100ml"], category:"beauty" },
  { id:53, brand:"L'Oreal",     name:"Total Repair 5 Shampoo",            price:399,  mrp:599,  off:33, rating:4.4, reviews:"19.3k", img:"https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=480&fit=crop", sizes:["340ml"], category:"beauty" },
  { id:54, brand:"Plum",        name:"Niacinamide Face Serum",            price:599,  mrp:790,  off:24, rating:4.6, reviews:"7.8k",  img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=480&fit=crop", sizes:["30ml"], category:"beauty" },
  { id:55, brand:"Biotique",    name:"Bio Honey Gel Face Wash",           price:179,  mrp:299,  off:40, rating:4.3, reviews:"15.4k", img:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=480&fit=crop", sizes:["150ml"], category:"beauty" },
  { id:56, brand:"Himalaya",    name:"Neem Face Pack",                    price:149,  mrp:225,  off:34, rating:4.4, reviews:"22.1k", img:"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=480&fit=crop", sizes:["100g"], category:"beauty" },

  // Jewellery (7)
  { id:57, brand:"Tanishq",     name:"Gold Plated Jhumka Earrings",       price:799,  mrp:1999, off:60, rating:4.5, reviews:"9.6k",  img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=480&fit=crop", sizes:["One Size"], category:"jewellery" },
  { id:58, brand:"Fossil",      name:"Analog Watch Brown Dial",           price:2999, mrp:6995, off:57, rating:4.7, reviews:"4.8k",  img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=480&fit=crop", sizes:["One Size"], category:"jewellery" },
  { id:59, brand:"Voylla",      name:"Kundan Pendant Necklace Set",       price:599,  mrp:1499, off:60, rating:4.3, reviews:"5.4k",  img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=480&fit=crop", sizes:["One Size"], category:"jewellery" },
  { id:60, brand:"Zaveri Pearls", name:"Pearl Mangalsutra",               price:899,  mrp:2199, off:59, rating:4.4, reviews:"3.7k",  img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=480&fit=crop", sizes:["One Size"], category:"jewellery" },
  { id:61, brand:"Accessorize", name:"Silver Stud Earrings",              price:399,  mrp:899,  off:55, rating:4.2, reviews:"6.1k",  img:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=480&fit=crop", sizes:["One Size"], category:"jewellery" },
  { id:62, brand:"Sukkhi",      name:"Traditional Bangles Set of 4",      price:499,  mrp:1299, off:62, rating:4.3, reviews:"4.9k",  img:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=480&fit=crop", sizes:["2.4","2.6","2.8"], category:"jewellery" },
  { id:63, brand:"Casio",       name:"Digital Sport Watch",               price:1799, mrp:2995, off:40, rating:4.6, reviews:"18.4k", img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=480&fit=crop", sizes:["One Size"], category:"jewellery" },

  // Bags & Footwear (8)
  { id:64, brand:"Puma",        name:"Men Running Sports Shoes",          price:1999, mrp:4999, off:60, rating:4.4, reviews:"15.7k", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=480&fit=crop", sizes:["6","7","8","9","10","11"], category:"bags" },
  { id:65, brand:"Nike",        name:"Air Zoom Pegasus Running Shoes",    price:4499, mrp:7995, off:44, rating:4.6, reviews:"18.2k", img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=480&fit=crop", sizes:["7","8","9","10","11"], category:"bags" },
  { id:66, brand:"Lavie",       name:"Women PU Shoulder Handbag",         price:1099, mrp:2499, off:56, rating:4.2, reviews:"7.8k",  img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=480&fit=crop", sizes:["One Size"], category:"bags" },
  { id:67, brand:"Skybags",     name:"Casual Backpack 30L",               price:1299, mrp:2599, off:50, rating:4.5, reviews:"12.4k", img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=480&fit=crop", sizes:["30L"], category:"bags" },
  { id:68, brand:"Adidas",      name:"Men Sneakers Casual Shoes",         price:2499, mrp:4999, off:50, rating:4.5, reviews:"22.3k", img:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=480&fit=crop", sizes:["7","8","9","10","11"], category:"bags" },
  { id:69, brand:"Bata",        name:"Women Heels Sandals",               price:899,  mrp:1799, off:50, rating:4.3, reviews:"8.4k",  img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=480&fit=crop", sizes:["5","6","7","8"], category:"bags" },
  { id:70, brand:"Caprese",     name:"Women Sling Bag",                   price:899,  mrp:1899, off:53, rating:4.3, reviews:"5.7k",  img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=480&fit=crop", sizes:["One Size"], category:"bags" },
  { id:71, brand:"American Tourister", name:"Trolley Bag 55cm",           price:2999, mrp:5999, off:50, rating:4.5, reviews:"9.8k",  img:"https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=480&fit=crop", sizes:["55cm"], category:"bags" },

  // Electronics (7)
  { id:72, brand:"boAt",        name:"Airdopes Wireless Earbuds",         price:1299, mrp:4990, off:74, rating:4.3, reviews:"95.4k", img:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=480&fit=crop", sizes:["One Size"], category:"electronics" },
  { id:73, brand:"Noise",       name:"ColorFit Pro 4 Smart Watch",        price:1999, mrp:6999, off:71, rating:4.4, reviews:"45.6k", img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=480&fit=crop", sizes:["One Size"], category:"electronics" },
  { id:74, brand:"JBL",         name:"Bluetooth Speaker Portable",        price:2499, mrp:4999, off:50, rating:4.6, reviews:"32.1k", img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=480&fit=crop", sizes:["One Size"], category:"electronics" },
  { id:75, brand:"Mi",          name:"Power Bank 20000mAh",               price:1499, mrp:2499, off:40, rating:4.5, reviews:"58.2k", img:"https://images.unsplash.com/photo-1609592424823-03a3a4b32a18?w=400&h=480&fit=crop", sizes:["20000mAh"], category:"electronics" },
  { id:76, brand:"Sony",        name:"Over Ear Wired Headphones",         price:1999, mrp:3990, off:50, rating:4.5, reviews:"15.7k", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=480&fit=crop", sizes:["One Size"], category:"electronics" },
  { id:77, brand:"Philips",     name:"Beard Trimmer for Men",             price:899,  mrp:1795, off:50, rating:4.4, reviews:"42.6k", img:"https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=480&fit=crop", sizes:["One Size"], category:"electronics" },
  { id:78, brand:"Realme",      name:"Buds Wireless 3 Neckband",          price:999,  mrp:1799, off:44, rating:4.2, reviews:"28.4k", img:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=480&fit=crop", sizes:["One Size"], category:"electronics" },
];

// ========== STATE ==========
let cart = [];
let wishlist = new Set();
let activeFilters = {};
let currentSlide = 0;
let slideTimer;
let currentList = products.slice();
let currentCategory = 'all';

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  initSkeletonLoad();
  initBannerSlider();
  initSearchBar();
  initPriceSlider();
  initDarkMode();
  initScrollEvents();
  initProfile();
  initNavCategories();
  initFilterButton();
  initCircleCats();
});

// ========== SKELETON LOAD ==========
function initSkeletonLoad() {
  setTimeout(() => {
    document.getElementById('skeletonGrid').style.display = 'none';
    document.getElementById('productGrid').style.display = 'grid';
    renderProducts(products);
  }, 900);
}

// ========== RENDER PRODUCTS ==========
function renderProducts(list) {
  currentList = list;
  const grid = document.getElementById('productGrid');
  const empty = document.getElementById('emptyResults');
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.style.display = 'grid';
  list.forEach((p, i) => grid.appendChild(createProductCard(p, i)));
}

function createProductCard(p, i) {
  const div = document.createElement('div');
  div.className = 'product-card';
  div.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;
  const isWished = wishlist.has(p.id);

  div.innerHTML = `
    <div class="card-img-wrap">
      <img src="${p.img}" alt="${escapeHtml(p.name)}" loading="lazy"/>
      <button class="card-wishlist ${isWished?'wishlisted':''}" id="wish-${p.id}" title="Wishlist">
        <i class="fa${isWished?'s':'r'} fa-heart"></i>
      </button>
    </div>
    <div class="card-body">
      <div class="card-brand">${escapeHtml(p.brand)}</div>
      <div class="card-name">${escapeHtml(p.name)}</div>
      <div class="card-pricing">
        <span class="card-price">₹${p.price}</span>
        <span class="card-mrp">₹${p.mrp}</span>
        <span class="card-off">${p.off}% off</span>
      </div>
      <span class="card-rating">
        ${p.rating} <i class="fas fa-star star"></i>
        <span class="count">| ${p.reviews}</span>
      </span>
      <div class="free-delivery">Free Delivery</div>
    </div>
  `;

  // Click handlers
  div.querySelector('.card-img-wrap').addEventListener('click', (e) => {
    if (!e.target.closest('.card-wishlist')) openQuickView(p.id);
  });
  div.querySelector('.card-body').addEventListener('click', () => openQuickView(p.id));
  div.querySelector('.card-wishlist').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleWishlist(p.id);
  });

  return div;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ========== QUICK VIEW ==========
function openQuickView(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('qvContent').innerHTML = `
    <img class="qv-img" src="${p.img}" alt="${escapeHtml(p.name)}"/>
    <div class="qv-info">
      <div class="qv-brand">${escapeHtml(p.brand)}</div>
      <h2 class="qv-name">${escapeHtml(p.name)}</h2>
      <div class="qv-price">₹${p.price}</div>
      <div class="qv-mrp">MRP ₹${p.mrp}</div>
      <div class="qv-off">${p.off}% OFF — You save ₹${p.mrp - p.price}</div>
      <div style="margin-bottom:10px;font-size:12px;color:var(--text-muted);font-weight:600;letter-spacing:0.5px">SELECT SIZE</div>
      <div class="qv-sizes">
        ${p.sizes.map(s => `<div class="qv-size-chip" onclick="selectSize(this)">${s}</div>`).join('')}
      </div>
      <div style="margin-bottom:14px;font-size:12px;color:var(--text-muted)">
        <i class="fas fa-truck"></i> Free Delivery &nbsp; • &nbsp;
        <i class="fas fa-undo"></i> 7 Day Return
      </div>
      <button class="qv-add-btn" onclick="addToCart(${p.id});closeQuickView()">
        <i class="fas fa-shopping-bag"></i> Add to Bag
      </button>
    </div>
  `;
  document.getElementById('quickViewOverlay').classList.add('active');
}
function closeQuickView() {
  document.getElementById('quickViewOverlay').classList.remove('active');
}
function selectSize(el) {
  el.parentElement.querySelectorAll('.qv-size-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

// ========== WISHLIST ==========
function toggleWishlist(id) {
  const btn = document.getElementById(`wish-${id}`);
  if (!btn) return;
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('wishlisted');
    btn.innerHTML = '<i class="far fa-heart"></i>';
  } else {
    wishlist.add(id);
    btn.classList.add('wishlisted');
    btn.innerHTML = '<i class="fas fa-heart"></i>';
  }
}

// ========== CART ==========
function addToCart(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  updateCartUI();
  bounceCart();
  renderCartItems();
}
function updateCartUI() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartBadge').textContent = count;
}
function bounceCart() {
  const fc = document.getElementById('floatingCart');
  fc.classList.add('bounce');
  setTimeout(() => fc.classList.remove('bounce'), 500);
}
function renderCartItems() {
  const el = document.getElementById('cartItems');
  if (cart.length === 0) {
    el.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p><button onclick="closeCart()">Continue Shopping</button></div>`;
    document.getElementById('cartFooter').style.display = 'none';
    return;
  }
  document.getElementById('cartFooter').style.display = 'block';
  let total = 0;
  el.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt=""/>
        <div class="cart-item-info">
          <div class="cart-item-name">${escapeHtml(item.name)}</div>
          <div class="cart-item-price">₹${item.price}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
      </div>
    `;
  }).join('');
  document.getElementById('cartTotal').textContent = total.toLocaleString('en-IN');
}
function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartUI(); renderCartItems(); }
}
function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI(); renderCartItems();
}
function openCart() {
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('active');
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('active');
}
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('floatingCart').addEventListener('click', openCart);

// ========== BANNER SLIDER ==========
function initBannerSlider() { startSlideTimer(); }
function startSlideTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 5000);
}
function goToSlide(n) {
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  startSlideTimer();
}
function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

// ========== SEARCH BAR (working) ==========
function initSearchBar() {
  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('searchSuggestions');
  const filterBtn = document.getElementById('filterBtn');
  const trendingTerms = ['Saree under ₹299','Kurti Set','Men Casual Shirts','Party Wear Dress','Gold Earrings','Running Shoes','Bedsheet','Smart Watch'];

  const siEl = document.getElementById('suggestionItems');
  function renderTrending() {
    siEl.innerHTML = trendingTerms.map(t => `
      <div class="suggestion-item" onclick="setSearch('${t.replace(/'/g,"\\'")}')">
        <i class="fas fa-arrow-trend-up"></i> ${t}
      </div>
    `).join('');
  }
  renderTrending();

  input.addEventListener('focus', () => suggestions.classList.add('active'));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrapper')) suggestions.classList.remove('active');
  });

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    if (val.length === 0) {
      renderTrending();
      filterBtn.style.display = 'none';
      runSearch('');
      return;
    }
    filterBtn.style.display = 'flex';
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(val) ||
      p.brand.toLowerCase().includes(val) ||
      p.category.toLowerCase().includes(val)
    );
    siEl.innerHTML = filtered.slice(0,6).map(p => `
      <div class="suggestion-item" onclick="setSearch('${p.name.replace(/'/g,"\\'")}')">
        <i class="fas fa-search"></i> ${escapeHtml(p.name)} <strong style="margin-left:auto;color:var(--primary)">₹${p.price}</strong>
      </div>
    `).join('') || '<div class="suggestion-item"><i class="fas fa-info-circle"></i> No results found</div>';
    runSearch(val);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      runSearch(e.target.value.trim().toLowerCase());
      suggestions.classList.remove('active');
      input.blur();
    }
  });
}

function setSearch(term) {
  const input = document.getElementById('searchInput');
  input.value = term;
  document.getElementById('searchSuggestions').classList.remove('active');
  document.getElementById('filterBtn').style.display = 'flex';
  runSearch(term.toLowerCase());
}

function runSearch(term) {
  const title = document.getElementById('productsTitle');
  if (!term) {
    title.textContent = currentCategory === 'all' ? 'Products For You' : prettyCategory(currentCategory);
    closeSidebar();
    applyCategoryFilter();
    return;
  }
  const results = products.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.brand.toLowerCase().includes(term) ||
    p.category.toLowerCase().includes(term)
  );
  title.textContent = `Showing results for "${term}" (${results.length})`;
  // Auto-open the filter sidebar after a search (as requested)
  openSidebar();
  renderProducts(results);
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterBtn').style.display = 'none';
  closeSidebar();
  runSearch('');
}

// ========== FILTER BUTTON (shows sidebar after search) ==========
function initFilterButton() {
  document.getElementById('filterBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.display !== 'none';
    if (isOpen) closeSidebar();
    else openSidebar();
  });
}
function openSidebar() {
  document.getElementById('sidebar').style.display = 'block';
  document.getElementById('filterBtn').classList.add('active');
}
function closeSidebar() {
  document.getElementById('sidebar').style.display = 'none';
  document.getElementById('filterBtn').classList.remove('active');
}

// ========== PRICE SLIDER ==========
function initPriceSlider() {
  const minR = document.getElementById('minRange');
  const maxR = document.getElementById('maxRange');
  if (!minR || !maxR) return;
  function updateSlider() {
    let min = parseInt(minR.value), max = parseInt(maxR.value);
    if (min > max - 100) { min = max - 100; minR.value = min; }
    document.getElementById('minVal').textContent = min.toLocaleString('en-IN');
    document.getElementById('maxVal').textContent = max.toLocaleString('en-IN');
    const pct1 = ((min - 100) / (10000 - 100)) * 100;
    const pct2 = ((max - 100) / (10000 - 100)) * 100;
    document.getElementById('rangeTrack').style.setProperty('--left', pct1 + '%');
    document.getElementById('rangeTrack').style.setProperty('--right', pct2 + '%');
    addFilterChip('Price', `₹${min}–₹${max}`, 'price');
  }
  minR.addEventListener('input', updateSlider);
  maxR.addEventListener('input', updateSlider);
  updateSlider();
}
function setPrice(min, max) {
  document.getElementById('minRange').value = min;
  document.getElementById('maxRange').value = max;
  document.getElementById('minRange').dispatchEvent(new Event('input'));
}

// ========== FILTER CHIPS ==========
function addFilterChip(label, value, key) {
  activeFilters[key] = { label, value };
  renderFilterChips();
}
function renderFilterChips() {
  const bar = document.getElementById('filterChipsBar');
  const container = document.getElementById('activeChips');
  const keys = Object.keys(activeFilters);
  if (keys.length === 0) { bar.style.display = 'none'; return; }
  bar.style.display = 'flex';
  container.innerHTML = keys.map(k => `
    <span class="filter-chip">
      ${activeFilters[k].label}: ${activeFilters[k].value}
      <span class="remove" onclick="removeFilter('${k}')">✕</span>
    </span>
  `).join('');
}
function removeFilter(key) { delete activeFilters[key]; renderFilterChips(); }
function clearAllFilters() {
  activeFilters = {};
  renderFilterChips();
  document.querySelectorAll('.color-option input').forEach(cb => cb.checked = false);
  document.querySelectorAll('[name="discount"], [name="rating"]').forEach(r => r.checked = false);
}
function addColorFilter(cb) {
  if (cb.checked) addFilterChip('Color', cb.value, 'color_' + cb.value);
  else removeFilter('color_' + cb.value);
}

// ========== FILTER TOGGLE ==========
function toggleFilter(name) {
  const body = document.getElementById(`${name}-body`);
  const icon = document.getElementById(`${name}-icon`);
  body.classList.toggle('collapsed');
  icon.style.transform = body.classList.contains('collapsed') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// ========== SORT ==========
function applySort() {
  const v = document.getElementById('sortSelect').value;
  let list = currentList.slice();
  if (v === 'lowhigh') list.sort((a,b) => a.price - b.price);
  else if (v === 'highlow') list.sort((a,b) => b.price - a.price);
  else if (v === 'rating') list.sort((a,b) => b.rating - a.rating);
  else if (v === 'new') list.sort((a,b) => b.id - a.id);
  renderProducts(list);
}

// ========== DARK MODE ==========
function initDarkMode() {
  const saved = localStorage.getItem('meesho-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const sw = document.getElementById('darkSwitch');
  if (sw) sw.checked = saved === 'dark';
}
function setupDarkSwitch() {
  const sw = document.getElementById('darkSwitch');
  if (!sw) return;
  sw.addEventListener('change', () => {
    const next = sw.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('meesho-theme', next);
  });
}

// ========== PROFILE ==========
function initProfile() {
  const btn = document.getElementById('profileBtn');
  const dd = document.getElementById('profileDropdown');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dd.classList.toggle('active');
  });
  dd.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', () => dd.classList.remove('active'));
  setupDarkSwitch();
}

// ========== SCROLL ==========
function initScrollEvents() {
  window.addEventListener('scroll', () => {
    const btt = document.getElementById('backToTop');
    if (window.scrollY > 400) btt.classList.add('visible');
    else btt.classList.remove('visible');
  });
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== NAV CATEGORIES ==========
function initNavCategories() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Don't trigger when clicking links inside the mega popup
      if (e.target.closest('.mega-popup')) return;
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      currentCategory = item.dataset.cat || 'all';
      document.getElementById('searchInput').value = '';
      document.getElementById('filterBtn').style.display = 'none';
      closeSidebar();
      applyCategoryFilter();
    });
  });
}
function applyCategoryFilter() {
  const title = document.getElementById('productsTitle');
  if (currentCategory === 'all') {
    title.textContent = 'Products For You';
    renderProducts(products);
  } else {
    const list = products.filter(p => p.category === currentCategory);
    title.textContent = prettyCategory(currentCategory);
    renderProducts(list.length ? list : products);
  }
}

// ========== CIRCULAR CATEGORY SHORTCUTS ==========
function initCircleCats() {
  document.querySelectorAll('.circle-cat').forEach(el => {
    el.addEventListener('click', () => {
      const cat = el.dataset.cat;
      if (!cat) return;
      currentCategory = cat;
      document.querySelectorAll('.nav-item').forEach(i => {
        i.classList.toggle('active', i.dataset.cat === cat);
      });
      document.getElementById('searchInput').value = '';
      document.getElementById('filterBtn').style.display = 'none';
      closeSidebar();
      applyCategoryFilter();
      document.getElementById('productsSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
function prettyCategory(c) {
  return ({
    'women-ethnic':'Women Ethnic',
    'women-western':'Women Western',
    'men':'Men',
    'kids':'Kids',
    'home':'Home & Kitchen',
    'beauty':'Beauty & Health',
    'jewellery':'Jewellery',
    'bags':'Bags & Footwear',
    'electronics':'Electronics',
  })[c] || 'Products';
}
