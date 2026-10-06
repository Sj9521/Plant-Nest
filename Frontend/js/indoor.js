// Plant data array with indoor plants (Prices converted to INR)
const plantsData = [
  {
    id: 1,
    name: "Pothos (Epipremnum aureum)",
    price: 349,
    size: "Vines 6 to 10 feet long",
    water: "Allow the top inch of soil to dry out between watering.",
    fertilizer: "Light feeders, so use a balanced liquid fertilizer every 1 to 3 months.",
    image: "../images/indoor_images/pothos.webp"
  },
  {
    id: 2,
    name: "Philodendron (Philodendron spp.)",
    price: 499,
    size: "Vines to 8 feet long",
    water: "Prefers evenly moist soil, but not soggy. Water if top inch of soil is dry.",
    fertilizer: "Apply a water-soluble houseplant fertilizer from spring through fall.",
    image: "../images/indoor_images/Philodendron.webp"
  },
  {
    id: 3,
    name: "Prayer Plant (Calathea spp.)",
    price: 599,
    size: "Up to 3 feet tall",
    water: "Keep evenly moist. Don't allow to become overly soggy or dry out completely. May be sensitive to tap water, so use distilled or filtered water.",
    fertilizer: "Once a month from spring through fall.",
    image: "../images/indoor_images/prayerplant.webp"
  },
  {
    id: 4,
    name: "Bird's Nest Fern (Asplenium nidus)",
    price: 549,
    size: "Up to 2 feet tall",
    water: "Keep soil evenly moist, but not soggy. Water at the edge of the rosette so water doesn't pool in the center and cause rot. Yellow leaves signal overwatering.",
    fertilizer: "Fertilize every 2 to 4 weeks from spring until fall with a diluted houseplant fertilizer.",
    image: "../images/indoor_images/Aspleniumnidus.jpg"
  },
  {
    id: 5,
    name: "ZZ Plant (Zamioculcas zamiifolia)",
    price: 699,
    size: "2 to 3 feet tall",
    water: "ZZ plants store water in their semi-succulent stems so you may only need to water every couple weeks. Overwatering can do more damage than underwatering, so don't allow the soil to become soggy.",
    fertilizer: "They are light feeders, so only fertilize every three months or so.",
    image: "../images/indoor_images/Zamioculcas-zamiifolia.jpg"
  },
  {
    id: 6,
    name: "Parlor Palm (Chamaedorea elegans)",
    price: 599,
    size: "2 to 4 feet tall",
    water: "Avoid overwatering, but keep the soil evenly moist. Water when the surface of the soil feels dry.",
    fertilizer: "Fertilize monthly in spring and summer.",
    image: "../images/indoor_images/chamaedorea-elegans.webp"
  },
  {
    id: 7,
    name: "Peace Lily (Spathiphyllum spp.)",
    price: 449,
    size: "1 to 6 feet tall",
    water: "Keep soil evenly moist, but not soggy. Don't allow the soil to dry out completely. Reduce water in the winter when plant growth slows.",
    fertilizer: "Apply a water-soluble houseplant fertilizer at half strength every two months.",
    image: "../images/indoor_images/peace-lily.webp"
  },
  {
    id: 8,
    name: "Chinese Evergreen (Aglaonema spp.)",
    price: 549,
    size: "2 to 3 feet tall",
    water: "Keep soil evenly moist, but not soggy. Reduce water in the winter when plant growth slows. Wilted leaves are a sign of underwatering; overwatering may cause stem or root rot.",
    fertilizer: "Monthly with a diluted liquid fertilizer from early spring through fall.",
    image: "../images/indoor_images/chinese-evergreen.webp"
  },
  {
    id: 9,
    name: "Cast Iron Plant (Aspidistra elatior)",
    price: 749,
    size: "15 to 24 inches tall",
    water: "Water moderately in spring and summer, less often in fall and winter. Allow the soil to dry between watering.",
    fertilizer: "Once a month from spring through fall.",
    image: "../images/indoor_images/aspidistra-elatior.webp"
  },
  {
    id: 10,
    name: "Tradescantia (Tradescantia spp.)",
    price: 299,
    size: "3 to 36 inches tall, 9 to 24 inches wide, can trail to 36 inches",
    water: "Tradescantias prefer moist soil, but avoid overwatering to prevent root rot.",
    fertilizer: "Use a balanced liquid houseplant fertilizer monthly.",
    image: "../images/indoor_images/tradescantia.webp"
  },
  {
    id: 11,
    name: "Monstera (Monstera spp.)",
    price: 899,
    size: "3 to 20 feet tall",
    water: "Deeply water every 1 to 2 weeks, or whenever the soil feels dry. Drooping leaves often mean your plant needs a drink.",
    fertilizer: "Not necessary, but an occasional dose of all-purpose houseplant food during the spring and summer will encourage more vigorous growth.",
    image: "../images/indoor_images/monstera.webp"
  },
  {
    id: 12,
    name: "Watermelon Peperomia (Peperomia argyreia)",
    price: 399,
    size: "6 to 8 inches tall",
    water: "Water moderately, allowing the soil to become dry to the touch before rewatering. Overwatering can cause root rot.",
    fertilizer: "Apply a balanced 20-20-20 liquid fertilizer monthly during the growing season, from mid-March to November. Cease fertilizing in winter when plant growth slows down.",
    image: "../images/indoor_images/watermelon-peperomia.webp"
  },
  {
    id: 13,
    name: "Polka Dot Plant (Hypoestes phyllostachya)",
    price: 249,
    size: "Up to 12 inches tall",
    water: "Keep the soil consistently moist, but not soggy. Too little water causes the leaves to wilt.",
    fertilizer: "Apply a diluted liquid fertilizer every two weeks from early spring through late summer.",
    image: "../images/indoor_images/polka-dot-plant.webp"
  },
  {
    id: 14,
    name: "Air Plant (Tillandsia spp.)",
    price: 199,
    size: "Varies, depending on the variety",
    water: "Run the plants under water a few times a week. If the leaves are curled more than normal, submerge in a bowl of water overnight.",
    fertilizer: "Use an epiphyte fertilizer spray weekly, or according to package directions.",
    image: "../images/indoor_images/air-plant.webp"
  },
  {
    id: 15,
    name: "Haworthia (Haworthia spp.)",
    price: 249,
    size: "3 to 5 inches tall",
    water: "Allow the soil to dry out completely between waterings.",
    fertilizer: "Infrequently, with a slow-release product.",
    image: "../images/indoor_images/haworthia.webp"
  },
  {
    id: 16,
    name: "Aloe (Aloe vera spp.)",
    price: 349,
    size: "12 to 24 inches tall",
    water: "Water deeply, but not too often, allowing the soil to dry to a depth of 1 to 2 inches between watering.",
    fertilizer: "Aloes generally don't require fertilizing.",
    image: "../images/indoor_images/aloe-vera-aloe-houseplant.jpg"
  },
  {
    id: 17,
    name: "Spider Plant (Chlorophytum comosum)",
    price: 399,
    size: "6 to 8 inches tall, with cascading runners",
    water: "Water generously when the soil feels dry; more sparingly in winter.",
    fertilizer: "Monthly during the active growing season, early spring to late autumn.",
    image: "../images/indoor_images/spider-plant.webp"
  },
  {
    id: 18,
    name: "Kalanchoe (Kalanchoe blossfeldiana)",
    price: 299,
    size: "Up to 12 inches tall",
    water: "Water every week or so when the soil feels dry.",
    fertilizer: "Once or twice a year, in early spring and late autumn. Plants in bloom do not need fertilizing.",
    image: "../images/indoor_images/kalanchoe.webp"
  },
  {
    id: 19,
    name: "Alocasia (Alocasia hybrids)",
    price: 799,
    size: "2 to 6 feet tall and wide, depending on variety",
    water: "Water regularly during the growing season (spring through fall) to keep the soil evenly moist, but not soggy; less frequently during winter.",
    fertilizer: "Feed with a diluted liquid houseplant fertilizer one to two times per month during spring and summer.",
    image: "../images/indoor_images/alocasia.webp"
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
  const plant = plantsData.find((p) => p.id === plantId);
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

// Toggle Wishlist & Update Heart UI
function toggleWishlist(plantId) {
  const plant = plantsData.find((p) => p.id === plantId);
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
      renderPlantCards(plantsData);
      return;
    }

    const filtered = plantsData.filter((plant) =>
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
        renderPlantCards(plantsData);
      }
    });
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderPlantCards(plantsData);
  updateCounters();
  setupSearchToggle();
  setupLiveSearch();
});