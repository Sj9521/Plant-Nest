function goBack() {
  if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
    history.back();
  } else {
    window.location.href = "../html/home.html";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("wishlist-container");

  function getWishlist() {
    return JSON.parse(localStorage.getItem("plantnest_wishlist")) || [];
  }

  function saveWishlist(items) {
    localStorage.setItem("plantnest_wishlist", JSON.stringify(items));
    updateCounters();
  }

  function getCart() {
    return JSON.parse(localStorage.getItem("plantnest_cart")) || [];
  }

  function saveCart(items) {
    localStorage.setItem("plantnest_cart", JSON.stringify(items));
    updateCounters();
  }

  function updateCounters() {
    const wishlistCounter = document.getElementById("wishlist-counter");
    if (wishlistCounter) {
      wishlistCounter.textContent = getWishlist().length;
    }

    const cartCounter = document.getElementById("cart-counter");
    if (cartCounter) {
      const cart = getCart();
      const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      cartCounter.textContent = totalQty;
    }
  }

  function renderWishlist() {
    if (!container) return;
    const wishlist = getWishlist();

    if (wishlist.length >= 1) {
      container.innerHTML = `
        <div class="wishlist-items-wrapper">
            <h2 class="wishlist-count-heading">Saved Items (${wishlist.length})</h2>
            ${wishlist.map((item, index) => `
                <div class="wishlist-item-card" style="display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 12px; border-bottom: 1px solid #eee;">
                    <div class="wishlist-item-left" style="display: flex; align-items: center; gap: 14px;">
                        <div class="wishlist-item-thumb">
                            ${
                              item.image
                                ? `<img src="${item.image}" alt="${item.name}" style="width: 55px; height: 55px; object-fit: cover; border-radius: 8px;">`
                                : `<i class="fa-solid fa-leaf" style="font-size: 24px;"></i>`
                            }
                        </div>
                        <div class="wishlist-item-info">
                            <h4 style="margin: 0 0 4px 0;">${item.name}</h4>                             <span style="color: #666;">$${Number(item.price).toFixed(2)}</span>
                        </div>
                    </div>
                    <div class="wishlist-card-actions" style="display: flex; gap: 8px;">
                        <button class="btn-wishlist-move" data-index="${index}" style="padding: 6px 12px; cursor: pointer;">Move to Cart</button>
                        <button class="btn-wishlist-remove" data-index="${index}" style="padding: 6px 12px; background: none; border: 1px solid #dc3545; color: #dc3545; cursor: pointer; border-radius: 4px;">Remove</button>
                    </div>
                </div>
            `).join("")}
        </div>
      `;

      // Remove from wishlist
      container.querySelectorAll(".btn-wishlist-remove").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idx = Number(e.currentTarget.dataset.index);
          const currentList = getWishlist();
          currentList.splice(idx, 1);
          saveWishlist(currentList);
          renderWishlist();
        });
      });

      // Move item from wishlist to cart
      container.querySelectorAll(".btn-wishlist-move").forEach((button) => {
        button.addEventListener("click", (e) => {
          const idx = Number(e.currentTarget.dataset.index);
          const currentList = getWishlist();
          const movedItem = currentList.splice(idx, 1)[0];
          saveWishlist(currentList);

          const cart = getCart();
          const existingItem = cart.find((i) => i.id === movedItem.id);

          if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
          } else {
            cart.push({ ...movedItem, quantity: 1 });
          }

          saveCart(cart);
          renderWishlist();
        });
      });
    } else {
      container.innerHTML = `
        <div class="wishlist-empty-box">
            <div class="wishlist-empty-icon">
                <i class="fa-regular fa-heart"></i>
            </div>
            <h2>Your Wishlist is Empty</h2>
            <p>Save items you love so you can easily purchase them whenever you are ready.</p>
            <a href="../html/home.html" class="wishlist-action-btn">
                Explore Plants <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
      `;
    }

    updateCounters();
  }

  renderWishlist();
});