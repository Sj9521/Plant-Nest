function goBack() {
  if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
    history.back();
  } else {
    window.location.href = "../html/home.html";
  }
}

// Currency Formatter for Indian Rupee (INR)
const formatINR = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cart-container");

  function getCart() {
    return JSON.parse(localStorage.getItem("plantnest_cart")) || [];
  }

  function saveCart(items) {
    localStorage.setItem("plantnest_cart", JSON.stringify(items));
    updateCounters();
  }

  function updateCounters() {
    const counter = document.getElementById("cart-counter");
    if (counter) {
      const cart = getCart();
      const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      counter.textContent = totalCount;
    }

    const wishlistCounter = document.getElementById("wishlist-counter");
    if (wishlistCounter) {
      const wishlist = JSON.parse(localStorage.getItem("plantnest_wishlist")) || [];
      wishlistCounter.textContent = wishlist.length;
    }
  }

  // Update item quantity
  function updateItemQty(index, change) {
    const cart = getCart();
    if (!cart[index]) return;

    cart[index].quantity = (cart[index].quantity || 1) + change;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    saveCart(cart);
    renderCart();
  }

  // Remove item completely
  function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
  }

  function renderCart() {
    if (!container) return;
    const cart = getCart();

    if (cart.length >= 1) {
      const totalPrice = cart.reduce(
        (sum, item) => sum + Number(item.price) * (item.quantity || 1),
        0
      );
      const totalItems = cart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );

      container.innerHTML = `
        <div class="cart-items-wrapper">
            <h2 class="cart-count-heading">Items in Cart (${totalItems})</h2>
            ${cart.map((item, index) => {
              const itemQty = item.quantity || 1;
              const itemTotal = Number(item.price) * itemQty;

              return `
                <div class="cart-item-card" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px; border-bottom: 1px solid #eee;">
                    <div class="cart-item-left" style="display: flex; align-items: center; gap: 14px;">
                        <div class="cart-item-thumb">
                            ${
                              item.image
                                ? `<img src="${item.image}" alt="${item.name}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 8px;">`
                                : `<i class="fa-solid fa-leaf" style="font-size: 24px;"></i>`
                            }
                        </div>
                        <div class="cart-item-info">
                            <h4 style="margin: 0 0 4px 0;">${item.name}</h4>                                     
                            <span style="color: #666;">${formatINR(Number(item.price))} each &bull; <strong>${formatINR(itemTotal)}</strong></span>
                        </div>
                    </div>

                    <div class="cart-item-actions" style="display: flex; align-items: center; gap: 12px;">
                        <div class="qty-stepper" style="display: inline-flex; align-items: center; border: 1px solid #ccc; border-radius: 6px; overflow: hidden;">
                            <button type="button" class="btn-qty-minus" data-index="${index}" style="padding: 4px 10px; border: none; background: #f0f0f0; cursor: pointer; font-size: 14px; font-weight: bold;">–</button>
                            <span style="padding: 4px 10px; min-width: 20px; text-align: center; font-weight: 600;">${itemQty}</span>
                            <button type="button" class="btn-qty-plus" data-index="${index}" style="padding: 4px 10px; border: none; background: #f0f0f0; cursor: pointer; font-size: 14px; font-weight: bold;">+</button>
                        </div>
                        <button type="button" class="btn-cart-remove" data-index="${index}" style="background: none; border: none; color: #dc3545; cursor: pointer; font-size: 14px;">Remove</button>
                    </div>
                </div>
              `;
            }).join("")}

            <div class="cart-summary-card" style="margin-top: 24px; text-align: right;">
                <h3>Total: ${formatINR(totalPrice)}</h3>
                <a href="../html/checkout.html" class="cart-action-btn">Proceed to Checkout</a>
            </div>
        </div>
      `;

      // Stepper listeners
      container.querySelectorAll(".btn-qty-minus").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idx = Number(e.currentTarget.dataset.index);
          updateItemQty(idx, -1);
        });
      });

      container.querySelectorAll(".btn-qty-plus").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idx = Number(e.currentTarget.dataset.index);
          updateItemQty(idx, 1);
        });
      });

      // Remove listeners
      container.querySelectorAll(".btn-cart-remove").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idx = Number(e.currentTarget.dataset.index);
          removeItem(idx);
        });
      });
    } else {
      container.innerHTML = `
        <div class="cart-empty-box">
            <div class="cart-empty-icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any plants or gardening accessories yet.</p>
            <a href="../html/home.html" class="cart-action-btn">
                Start Shopping <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
      `;
    }

    updateCounters();
  }

  renderCart();
});