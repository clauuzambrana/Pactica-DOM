const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'ASUS TUF Gaming',
    price: 899,
    stars: 5,
    reviews: 150,
    seller: 'PcComponentes',
    image: 'https://thumb.pccomponentes.com/w-300-300/articles/1065/10658853/1442-asus-tuf-gaming-f15-fx507zc4-hn002-intel-core-i7-12700h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
  name: 'Logitech G502 Hero',
  price: 59,
  stars: 4,
  reviews: 340,
  seller: 'PcComponentes',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnwYTk0tn56V4bi8rR5ivTqNn8VVW3P4kdA&s'
},
{
  name: 'Samsung 970 EVO Plus 1TB',
  price: 95,
  stars: 5,
  reviews: 410,
  seller: 'PcComponentes',
  image: 'https://m.media-amazon.com/images/I/61OOAXlbRtL._UF894,1000_QL80_.jpg'
},
{
  name: 'Corsair Vengeance RGB Pro 16GB',
  price: 75,
  stars: 5,
  reviews: 290,
  seller: 'PcComponentes',
  image: 'https://img.pccomponentes.com/articles/16/164467/1.jpg'
},
{
  name: 'MSI GeForce RTX 3060',
  price: 399,
  stars: 5,
  reviews: 220,
  seller: 'PcComponentes',
  image: 'https://m.media-amazon.com/images/I/81Df1O3ffBL.jpg'
},
{
  name: 'Intel Core i5-12400F',
  price: 179,
  stars: 4,
  reviews: 180,
  seller: 'PcComponentes',
  image: 'https://thumb.pccomponentes.com/w-530-530/articles/83/834922/1636-intel-core-i5-12400f-44-ghz.jpg'
},
{
  name: 'ASUS Prime B660M-A',
  price: 139,
  stars: 4,
  reviews: 130,
  seller: 'PcComponentes',
  image: 'https://dlcdnwebimgs.asus.com/gain/8d9e3b62-76b3-4755-825c-f940eb1adeb6/'
},
{
  name: 'NZXT H510',
  price: 79,
  stars: 5,
  reviews: 200,
  seller: 'PcComponentes',
  image: 'https://m.media-amazon.com/images/I/71PAskE-HJL.jpg'
},
{
  name: 'Cooler Master Hyper 212',
  price: 34,
  stars: 4,
  reviews: 380,
  seller: 'PcComponentes',
  image: 'https://m.media-amazon.com/images/I/71NO8WxnhwL._UF894,1000_QL80_.jpg'
}

];

const productsGrid = document.querySelector('.productos-grid');

products.forEach(product => {
  productsGrid.innerHTML += `
    <article class="productos-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="precio">${product.price}€</p>
      <span class="stock">En stock</span>
      <p>Vendedor: ${product.seller}</p>
    </article>
  `;
});
