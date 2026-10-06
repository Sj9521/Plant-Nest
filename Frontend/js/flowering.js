const floweringPlantsData = [
  {
    id: 1,
    name: "Bougainvillea (Bougainvillea spectabilis)",
    price: 499,
    size: "3 to 20 feet tall (climbing vine/shrub)",
    water: "Allow soil to dry out between waterings. Drought-tolerant once established; overwatering limits blooms.",
    fertilizer: "Feed every 4 to 6 weeks during spring and summer with a high-potassium flowering fertilizer.",
    image: "../images/flowering_images/6242b24d94fb46001eea9900.jpg"
  },
  {
    id: 2,
    name: "Yesterday-Today-Tomorrow (Brunfelsia pauciflora)",
    price: 649,
    size: "3 to 8 feet tall",
    water: "Keep soil consistently moist but never waterlogged. Water when the top inch of soil feels dry.",
    fertilizer: "Apply an acidic, bloom-boosting fertilizer monthly from early spring through autumn.",
    image: "../images/flowering_images/Brunfelsia_Pauciflora.webp"
  },
  {
    id: 3,
    name: "African Daisy (Dimorphotheca ecklonis)",
    price: 349,
    size: "1 to 3 feet tall",
    water: "Moderate watering. Allow top 1 to 2 inches of soil to dry out before watering again to avoid root rot.",
    fertilizer: "Apply a balanced water-soluble fertilizer every 2 to 3 weeks during the blooming period.",
    image: "../images/flowering_images/dimophoteca-2.jpg"
  },
  {
    id: 4,
    name: "Potted Marigold / Calendula (Calendula officinalis)",
    price: 249,
    size: "8 to 18 inches tall",
    water: "Water thoroughly at the base when the top inch of soil is dry. Avoid wetting the blooms and leaves.",
    fertilizer: "Feed every 3 to 4 weeks with a low-nitrogen, high-phosphorus liquid fertilizer.",
    image: "../images/flowering_images/image.webp"
  },
  {
    id: 5,
    name: "Ixora / Jungle Flame (Ixora coccinea)",
    price: 449,
    size: "4 to 6 feet tall",
    water: "Prefers evenly moist, well-draining acidic soil. Water regularly, especially in hot sunny weather.",
    fertilizer: "Feed with an acid-forming fertilizer formulated for blooming shrubs every 4 to 6 weeks in spring.",
    image: "../images/flowering_images/ixora-.avif"
  },
  {
    id: 6,
    name: "French Marigold (Tagetes patula)",
    price: 199,
    size: "1 to 2 feet tall",
    water: "Water moderately at soil level, allowing topsoil to dry between waterings. Drought-tolerant once established.",
    fertilizer: "Light feeder; apply a diluted balanced liquid feed once a month during peak flowering.",
    image: "../images/flowering_images/marigold-palnt.jpg"
  },
  {
    id: 7,
    name: "Globe Amaranth / Bachelor's Button (Gomphrena globosa)",
    price: 299,
    size: "1 to 2 feet tall",
    water: "Low to moderate water needs. Water once a week or when top 1 to 2 inches of soil are dry.",
    fertilizer: "Feed once every 4 to 6 weeks during the summer growing season with slow-release plant food.",
    image: "../images/flowering_images/plant.jpg"
  },
  {
    id: 8,
    name: "Red Shrub Rose (Rosa spp.)",
    price: 549,
    size: "3 to 5 feet tall",
    water: "Keep soil evenly moist. Water deeply at the root base 2 to 3 times a week during hot months.",
    fertilizer: "Use a dedicated rose fertilizer every 3 weeks from early spring through early autumn.",
    image: "../images/flowering_images/rose-plant.avif"
  },
  {
    id: 9,
    name: "Sunflower (Helianthus annuus)",
    price: 249,
    size: "3 to 10 feet tall",
    water: "Requires deep, regular watering while establishing roots; once mature, water deeply once a week.",
    fertilizer: "Apply a diluted high-potassium liquid feed every 2 to 3 weeks to support large bloom heads.",
    image: "../images/flowering_images/Sunflower-1.webp"
  },
  {
    id: 10,
    name: "Yellow Allamanda / Golden Trumpet (Allamanda cathartica)",
    price: 599,
    size: "4 to 8 feet tall",
    water: "Water generously during the blooming cycle, allowing the top inch of soil to dry out between sessions.",
    fertilizer: "Feed every 2 to 3 weeks during spring and summer with a flowering shrub water-soluble fertilizer.",
    image: "../images/flowering_images/Untitled-design-68.png"
  }
];

const plantContainer = document.getElementById("plant-container");

// Currency Formatter for Indian Rupee (INR)
const formatINR = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
};

function getStoredCart() {
  return JSON.parse(localStorage.getItem("plantnest_cart")) || [];
}

function getStoredWishlist() {
  return JSON.parse(localStorage.getItem("plantnest_wishlist")) || [];
}

let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function updateCounters() {
  const cartCounter = document.getElementById("cart-counter");
  if (cartCounter) {
    const cart = getStoredCart();
    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCounter.textContent = totalQty;
  }

  const wishlistCounter = document.getElementById("wishlist-counter");
  if (wishlistCounter) {
    const wishlist = getStoredWishlist();
    wishlistCounter.textContent = wishlist.length;
  }
}

function renderPlantCards(plants) {
  if (!plantContainer) return;

  if (plants.length === 0) {
    plantContainer.innerHTML = `
      <div class="no-items-found" style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
        <i class="fa-solid fa-seedling" style="font-size: 3rem; color: #888; margin-bottom: 12px; display: block;"></i>
        <h2 style="font-size: 1.5rem; color: #333; margin-bottom: 8px;">Items are not found</h2>
        <p style="color: #666; font-size: 0.95rem;">No plants match your search. Try checking the spelling or searching for another keyword.</p>
      </div>
    `;
    return;
  }

  const wishlist = getStoredWishlist();

  plantContainer.innerHTML = plants
    .map((plant) => {
      const isSaved = wishlist.some((item) => item.id === plant.id);
      const heartIconClass = isSaved ? "fa-solid fa-heart active" : "fa-regular fa-heart";

      return `
        <article class="plant-card" data-id="${plant.id}">
            <div class="card-img-wrapper">
                <img src="${plant.image}" alt="${plant.name}" loading="lazy">
                <button type="button" class="wishlist-btn" onclick="toggleWishlist(${plant.id})" aria-label="Toggle wishlist">
                    <i class="${heartIconClass}" id="heart-icon-${plant.id}"></i>
                </button>
            </div>
            
            <div class="card-content">
                <h3 class="plant-title">${plant.name}</h3>
                <p class="plant-price">${formatINR(plant.price)}</p>
                
                <div class="plant-details">
                    <p><i class="fa-solid fa-ruler-vertical"></i> <span><strong>Size:</strong> ${plant.size}</span></p>
                    <p><i class="fa-solid fa-droplet"></i> <span><strong>Water:</strong> ${plant.water}</span></p>
                    <p><i class="fa-solid fa-seedling"></i> <span><strong>Fertilizer:</strong> ${plant.fertilizer}</span></p>
                </div>

                <button type="button" class="add-to-cart-btn" onclick="addToCart(${plant.id})">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
            </div>
        </article>
      `;
    })
    .join("");
}

function addToCart(plantId) {
  const plant = floweringPlantsData.find((p) => p.id === plantId);
  if (!plant) return;

  const cart = getStoredCart();
  const existingItem = cart.find((item) => item.id === plantId);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image,
      quantity: 1
    });
  }

  localStorage.setItem("plantnest_cart", JSON.stringify(cart));
  updateCounters();
  showToast(`"${plant.name}" has been added to your cart!`);
}

function toggleWishlist(plantId) {
  const plant = floweringPlantsData.find((p) => p.id === plantId);
  if (!plant) return;

  let wishlist = getStoredWishlist();
  const index = wishlist.findIndex((item) => item.id === plantId);
  const heartIcon = document.getElementById(`heart-icon-${plantId}`);

  if (index > -1) {
    wishlist.splice(index, 1);
    if (heartIcon) {
      heartIcon.className = "fa-regular fa-heart";
    }
  } else {
    wishlist.push({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    });
    if (heartIcon) {
      heartIcon.className = "fa-solid fa-heart active";
    }
  }

  localStorage.setItem("plantnest_wishlist", JSON.stringify(wishlist));
  updateCounters();
}

function setupLiveSearch() {
  const searchInput = document.getElementById("site-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      renderPlantCards(floweringPlantsData);
      return;
    }

    const filtered = floweringPlantsData.filter((plant) =>
      plant.name.toLowerCase().includes(query) ||
      plant.size.toLowerCase().includes(query)
    );

    renderPlantCards(filtered);
  });
}

function goBack() {
  if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
    history.back();
  } else {
    window.location.href = "../html/home.html";
  }
}

function setupSearchToggle() {
  const searchToggleBtn = document.getElementById("search-toggle-btn");
  const searchCloseBtn = document.getElementById("search-close-btn");
  const searchBarContainer = document.getElementById("search-bar-container");
  const searchInput = document.getElementById("site-search-input");

  if (searchToggleBtn && searchBarContainer) {
    searchToggleBtn.addEventListener("click", () => {
      searchBarContainer.classList.toggle("active");
      if (searchInput && searchBarContainer.classList.contains("active")) {
        searchInput.focus();
      }
    });
  }

  if (searchCloseBtn && searchBarContainer) {
    searchCloseBtn.addEventListener("click", () => {
      searchBarContainer.classList.remove("active");
      if (searchInput) {
        searchInput.value = "";
        renderPlantCards(floweringPlantsData);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlantCards(floweringPlantsData);
  updateCounters();
  setupSearchToggle();
  setupLiveSearch();
});