const api = "https://fakestoreapi.com/products";

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartCount = document.getElementById("cartCount");

let products = [];
let cart = [];


// Fetch API
fetch(api)
  .then(response => response.json())
  .then(data => {

      products = data;

      displayProducts(products);

      calculateStatistics(products);

      document.getElementById("status").innerText =
      "Products Loaded Successfully";

  })
  .catch(error => {
      console.log(error);

      document.getElementById("status").innerText =
      "Failed To Load Products";
  })
  .finally(() => {
      console.log("API Request Completed");
  });


// Display Products
function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <h4>₹${product.price}</h4>
        <p>${product.category}</p>
        <p>⭐ ${product.rating.rate}</p>

        <button onclick="addToCart(${product.id})">
        Add To Cart
        </button>
        `;

        productContainer.append(card);
    });
}


// Search
searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const filteredProducts =
    products.filter(product =>
      product.title.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
});


// Category Filter
categorySelect.addEventListener("change", () => {

    const category =
    categorySelect.value;

    if(category === "all"){
        displayProducts(products);
        return;
    }

    const filteredProducts =
    products.filter(product =>
      product.category === category
    );

    displayProducts(filteredProducts);
});


// Add To Cart
function addToCart(id){

    const product =
    products.find(product =>
      product.id === id
    );

    cart.push(product);

    cartCount.innerText = cart.length;
}


// Remove From Cart
function removeFromCart(id){

    cart =
    cart.filter(product =>
      product.id !== id
    );

    cartCount.innerText = cart.length;
}


// Statistics
function calculateStatistics(data){

    document.getElementById("totalProducts")
    .innerText = data.length;

    const totalPrice =
    data.reduce((sum, product) =>
      sum + product.price,0);

    const avgPrice =
    (totalPrice / data.length).toFixed(2);

    document.getElementById("avgPrice")
    .innerText = avgPrice;

    const highest =
    [...data].sort((a,b)=>
      b.price-a.price)[0];

    const lowest =
    [...data].sort((a,b)=>
      a.price-b.price)[0];

    document.getElementById("highestPrice")
    .innerText =
    highest.title + " (₹" + highest.price + ")";

    document.getElementById("lowestPrice")
    .innerText =
    lowest.title + " (₹" + lowest.price + ")";
}