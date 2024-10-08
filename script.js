let cart = [];

function addToCart(name, price, imageUrl) {
  cart.push({ name, price, imageUrl });

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;

    cartItems.appendChild(li);

    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}
