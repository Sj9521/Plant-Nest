function goBack() {
    if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
        history.back();
    } 
    else {
        window.location.href = "../html/home.html";
        }
    }

// Update cart counter from localStorage
function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (!cartCounter) return;

  const cart = JSON.parse(localStorage.getItem('plantnest_cart')) || [];
  cartCounter.textContent = cart.length;
}

// Update wishlist counter from localStorage
function updateWishlistCounter() {
  const wishlistCounter = document.getElementById('wishlist-counter');
  if (!wishlistCounter) return;

  const wishlist = JSON.parse(localStorage.getItem('plantnest_wishlist')) || [];
  wishlistCounter.textContent = wishlist.length;
}

document.addEventListener("DOMContentLoaded", () => {

    updateCartCounter()
    updateWishlistCounter()
    
    const searchToggleBtn = document.getElementById("search-toggle-btn");
    const searchContainer = document.getElementById("search-bar-container");
    const searchInput = document.getElementById("site-search-input");
    const searchCloseBtn = document.getElementById("search-close-btn");

    function openSearch() {
        searchContainer.classList.add("active");
        setTimeout(() => searchInput.focus(), 250);
    }

    function closeSearch() {
        searchContainer.classList.remove("active");
        searchInput.value = "";
    }

    // Toggle on search lens click
    searchToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = searchContainer.classList.contains("active");
        if (isOpen) {
            closeSearch();
        } else {
            openSearch();
        }
    });

    // Close on cross icon click
    searchCloseBtn.addEventListener("click", () => {
        closeSearch();
    });

    // Close when pressing the Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchContainer.classList.contains("active")) {
            closeSearch();
        }
    });
});