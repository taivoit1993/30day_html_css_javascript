var listProduct = document.querySelector(".list-product");
var input = document.querySelector(".search input");

var mockData = fetch("https://fakestoreapi.com/products").then((res) => {
    return res.json();
}).then(data => {
    data.forEach(element => {
        addProduct(element);
    });
});

input.addEventListener("input", function (e) {
    let val = input.value.trim().toLowerCase();
    let products = document.querySelectorAll(".list-product .product");
    products.forEach(product => {
        let text = product.innerText.toLowerCase();
        if (text.includes(val)) {
            product.classList.remove("hidden");
        } else {
            product.classList.add("hidden");
        }
    });
});

function addProduct(product) {
    let productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
    <div class="product__feature">
        <img  src="${product.image}" alt="">
    </div>
    <div class="product__info">
        <h4 class="product__title">${product.title}</h4>
        <p class="product__price">${product.price}</p>
    </div>`;
    listProduct.appendChild(productElement);
}