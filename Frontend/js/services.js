function goBack() {
    if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
        history.back();
    } 
    else {
        window.location.href = "../html/home.html";
        }
    }

function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (!cartCounter) return;

  const cart = JSON.parse(localStorage.getItem('plantnest_cart')) || [];
  cartCounter.textContent = cart.length;
}

updateCartCounter()

// Update wishlist counter from localStorage
function updateWishlistCounter() {
  const wishlistCounter = document.getElementById('wishlist-counter');
  if (!wishlistCounter) return;

  const wishlist = JSON.parse(localStorage.getItem('plantnest_wishlist')) || [];
  wishlistCounter.textContent = wishlist.length;
}

updateWishlistCounter()