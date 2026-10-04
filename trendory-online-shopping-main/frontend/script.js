// ==========================
// WAIT FOR DOM LOAD
// ==========================
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // LOGIN / SIGNUP TOGGLE
  // ==========================
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  if (sign_up_btn && container) {
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
  }

  if (sign_in_btn && container) {
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }

  // ==========================
  // POPUP
  // ==========================
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");
  const okBtn = document.getElementById("okBtn");

  // ==========================
  // LOGIN (BACKEND CONNECT)
  // ==========================
  if (loginForm) {
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const username = loginForm.username.value;
      const password = loginForm.password.value;

      try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        popupText.innerText = data.message;
        popup.classList.add("active");

        loginForm.reset();

      } catch {
        popupText.innerText = "❌ Server error";
        popup.classList.add("active");
      }
    });
  }

  // ==========================
  // SIGNUP (BACKEND CONNECT)
  // ==========================
  if (signupForm) {
    signupForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const username = signupForm.username.value;
      const email = signupForm.email.value;
      const password = signupForm.password.value;

      try {
        const res = await fetch("http://localhost:5000/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();

        popupText.innerText = data.message;
        popup.classList.add("active");

        signupForm.reset();

      } catch {
        popupText.innerText = "❌ Server error";
        popup.classList.add("active");
      }
    });
  }

  // ==========================
  // CLOSE POPUP
  // ==========================
  if (okBtn) {
    okBtn.addEventListener("click", function () {
      popup.classList.remove("active");
    });
  }

  // ==========================
  // NAVBAR MENU CLOSE
  // ==========================
  const menuLinks = document.querySelectorAll(".menu-items a");
  const checkbox = document.getElementById("checkbox");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (checkbox) checkbox.checked = false;
    });
  });

});


// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ==========================
// STORAGE
// ==========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// ==========================
// ADD TO CART
// ==========================
function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}


// ==========================
// WISHLIST
// ==========================
function toggleWishlist(product, btn) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const index = wishlist.findIndex(item => item.name === product.name);

  if (index === -1) {
    wishlist.push(product);
    btn.innerText = "❤️ Wishlist";
  } else {
    wishlist.splice(index, 1);
    btn.innerText = "♡ Wishlist";
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}


// ==========================
// RENDER PRODUCTS
// ==========================
function renderProducts(products) {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.addEventListener("click", () => {
      openProduct(p);
    });

    card.innerHTML = `
      <img src="${p.img1}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button class="cart-btn">Add to Cart</button>
      <button class="wish-btn">♡ Wishlist</button>
      <button class="buy-btn">Buy Now</button>
    `;

    card.querySelector(".cart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(p);
    });

    const wishBtn = card.querySelector(".wish-btn");

    if (wishlist.find(item => item.name === p.name)) {
      wishBtn.innerText = "❤️ Wishlist";
    }

    wishBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWishlist(p, wishBtn);
    });

    card.querySelector(".buy-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      buyNow(p);
    });

    container.appendChild(card);
  });
}


// ==========================
// OPEN PRODUCT PAGE
// ==========================
function openProduct(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}


// ==========================
// BUY NOW (FIXED)
// ==========================
function buyNow(product) {
  localStorage.setItem("orderProduct", JSON.stringify(product));
  window.location.href = "order.html";
}


// ==========================
// PLACE ORDER
// ==========================
function placeOrder() {
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const address = document.getElementById("customerAddress").value;

  const product = JSON.parse(localStorage.getItem("orderProduct"));

  if (!name || !phone || !address || !product) {
    alert("Please fill all details");
    return;
  }

  if (phone.length < 10) {
    alert("Enter valid phone number");
    return;
  }

  const orderData = {
    id: Date.now(),
    product,
    customerName: name,
    phone,
    address,
    status: "Order Placed"
  };

  fetch("http://localhost:5000/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
  .then(res => res.json())
  .then(() => {
    alert("✅ Order Placed Successfully!");
    localStorage.setItem("orderId", orderData.id);
  })
  .catch(() => {
    alert("❌ Server not running");
  });
}


// ==========================
// PAYMENT
// ==========================
function openPayment() {
  const orderId = localStorage.getItem("orderId");

  if (!orderId) {
    alert("⚠️ Please place order first");
    return;
  }

  document.getElementById("paymentModal").style.display = "flex";
}

function closePayment() {
  document.getElementById("paymentModal").style.display = "none";
}

function confirmPayment() {
  const selected = document.querySelector('input[name="payment"]:checked');

  if (!selected) {
    alert("⚠️ Please select payment method");
    return;
  }

  const method = selected.value;
  const orderId = localStorage.getItem("orderId");

  fetch(`http://localhost:5000/api/payment/${orderId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ method })
  })
  .then(res => res.json())
  .then(() => {
    alert(`✅ Payment Successful via ${method}`);
    closePayment();
  })
  .catch(() => {
    alert("❌ Server not running");
  });
}