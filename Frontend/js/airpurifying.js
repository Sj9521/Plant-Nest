const airPurifyingPlantsData = [
  {
    id: 1,
    name: "Bamboo Palm (Chamaedorea seifrizii)",
    price: 699,
    size: "4 to 8 feet tall",
    water: "Keep soil evenly moist but never saturated. Water when the top inch of soil feels dry.",
    fertilizer: "Feed with a diluted liquid houseplant fertilizer once a month during spring and summer.",
    image: "../images/air_purifying_images/bamboo-palm.jpg"
  },
  {
    id: 2,
    name: "Boston Fern (Nephrolepis exaltata)",
    price: 499,
    size: "2 to 3 feet tall and wide",
    water: "High moisture and humidity lover. Keep soil consistently damp, misting leaves regularly.",
    fertilizer: "Apply a balanced liquid fertilizer at half strength every month from spring to autumn.",
    image: "../images/air_purifying_images/boston-fern.jpg"
  },
  {
    id: 3,
    name: "Chinese Evergreen (Aglaonema spp.)",
    price: 549,
    size: "1 to 3 feet tall",
    water: "Moderate watering. Water when the top 1 to 2 inches dry out; avoid waterlogging.",
    fertilizer: "Feed every 4 to 6 weeks with a standard liquid houseplant fertilizer during growing season.",
    image: "../images/air_purifying_images/chinese-evergreen.jpg"
  },
  {
    id: 4,
    name: "English Ivy (Hedera helix)",
    price: 399,
    size: "Vines trailing 3 to 8 feet",
    water: "Water thoroughly when the top layer of soil becomes dry. Avoid keeping soil soggy.",
    fertilizer: "Feed every month during active spring and summer growth with nitrogen-rich fertilizer.",
    image: "../images/air_purifying_images/english-ivy.jpg"
  },
  {
    id: 5,
    name: "Snake Plant (Sansevieria trifasciata)",
    price: 599,
    size: "2 to 4 feet tall",
    water: "Very drought-tolerant. Allow soil to dry completely between waterings; water once every 2 to 3 weeks.",
    fertilizer: "Feed sparingly with half-strength all-purpose plant food once in spring and once in summer.",
    image: "../images/air_purifying_images/green-snake-plant.webp"
  },
  {
    id: 6,
    name: "Lady Palm (Rhapis excelsa)",
    price: 899,
    size: "3 to 6 feet tall",
    water: "Water when the top 1 to 2 inches of soil feel dry. Needs well-draining soil to prevent root rot.",
    fertilizer: "Apply a slow-release palm fertilizer or liquid houseplant food once every 2 months in summer.",
    image: "../images/air_purifying_images/lady-palm.jpg"
  },
  {
    id: 7,
    name: "Lucky Jade Plant (Crassula ovata)",
    price: 449,
    size: "1 to 3 feet tall",
    water: "Allow potting mix to dry out almost completely between waterings. Reduce in winter.",
    fertilizer: "Apply a diluted balanced fertilizer every 4 to 6 weeks during the spring and summer.",
    image: "../images/air_purifying_images/lucky-jade-plant.webp"
  },
  {
    id: 8,
    name: "Money Plant / Golden Pothos (Epipremnum aureum)",
    price: 299,
    size: "Trailing vines 6 to 10 feet long",
    water: "Allow top inch of soil to dry out between waterings. Yellow leaves usually indicate overwatering.",
    fertilizer: "Feed once a month with a balanced liquid houseplant fertilizer from spring through fall.",
    image: "../images/air_purifying_images/money-plant.jpg"
  },
  {
    id: 9,
    name: "Peace Lily (Spathiphyllum wallisii)",
    price: 499,
    size: "1 to 3 feet tall",
    water: "Prefers consistently moist soil. Will visibly droop to signal when it needs water.",
    fertilizer: "Apply a balanced water-soluble houseplant fertilizer at half strength every 6 to 8 weeks.",
    image: "../images/air_purifying_images/peace-lily-plant.webp"
  },
  {
    id: 10,
    name: "Heartleaf Philodendron (Philodendron hederaceum)",
    price: 399,
    size: "Trailing vines 3 to 6 feet long",
    water: "Water when the top 25% of soil feels dry. Thrives in moderate humidity and bright, indirect light.",
    fertilizer: "Feed monthly from early spring through autumn with a general liquid foliage plant fertilizer.",
    image: "../images/air_purifying_images/philodendron.jpg"
  },
  {
    id: 11,
    name: "Rubber Plant (Ficus elastica)",
    price: 749,
    size: "3 to 8 feet tall",
    water: "Keep soil moist but not wet. Allow the top inch or two to dry before watering again.",
    fertilizer: "Feed every 4 weeks during spring and summer with a balanced liquid fertilizer.",
    image: "../images/air_purifying_images/rubber.jpg"
  },
  {
    id: 12,
    name: "ZZ Plant (Zamioculcas zamiifolia)",
    price: 649,
    size: "2 to 3 feet tall",
    water: "Extremely drought-tolerant; stores water in rhizomes. Water every 2 to 3 weeks after soil fully dries.",
    fertilizer: "Light feeder; apply a half-strength balanced houseplant food once every 3 months.",
    image: "../images/air_purifying_images/zamia-green-plant.webp"
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

// LocalStorage Getters
function getStoredCart() {
  return JSON.parse(localStorage.getItem("plantnest_cart")) || [];
}

function getStoredWishlist() {
  return JSON.parse(localStorage.getItem("plantnest_wishlist")) || [];
}

// Custom Toast Alert Notification
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

// Badge Counter Updates
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

// Render cards with "Items not found" handling
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

// Add item to cart with quantity tracking & alert message
function addToCart(plantId) {
  const plant = airPurifyingPlantsData.find((p) => p.id === plantId);
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

  // Alert confirmation toast
  showToast(`"${plant.name}" has been added to your cart!`);
}

// Toggle Wishlist & Update Heart UI
function toggleWishlist(plantId) {
  const plant = airPurifyingPlantsData.find((p) => p.id === plantId);
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

// Live Search Filter Handler
function setupLiveSearch() {
  const searchInput = document.getElementById("site-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      renderPlantCards(airPurifyingPlantsData);
      return;
    }

    const filtered = airPurifyingPlantsData.filter((plant) =>
      plant.name.toLowerCase().includes(query) ||
      plant.size.toLowerCase().includes(query)
    );

    renderPlantCards(filtered);
  });
}

// Navigation Helper
function goBack() {
  if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
    history.back();
  } else {
    window.location.href = "../html/home.html";
  }
}

// Search Drawer Toggle Handlers
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
        renderPlantCards(airPurifyingPlantsData);
      }
    });
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderPlantCards(airPurifyingPlantsData);
  updateCounters();
  setupSearchToggle();
  setupLiveSearch();
});