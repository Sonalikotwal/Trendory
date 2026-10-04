function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  let container = document.getElementById("cart-container");
  let totalEl = document.getElementById("total");

  console.log("Render started"); // DEBUG

  if (!container || !totalEl) {
    console.log("Missing HTML elements");
    return;
  }

  let cart = getCart();

  container.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Cart is empty</p>";
    totalEl.innerText = "Total: ₹0";
    return;
  }

  cart.forEach((item, index) => {
    total += Number(item.price);

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img1}" width="80">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalEl.innerText = "Total: ₹" + total;
}
function addToCart(product) {
  let cart = getCart();
  cart.push(product);
  saveCart(cart);
  renderCart();
}

function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function clearCart() {
  saveCart([]);
  renderCart();
}

window.onload = renderCart;