const medicinalPlantsData = [
  {
    id: 1,
    name: "Aloe Vera (Aloe barbadensis)",
    price: 349,
    size: "1 to 2 feet tall",
    water: "Water thoroughly only when the soil has completely dried out. Prone to rot if overwatered.",
    fertilizer: "Feed sparingly with a balanced organic liquid fertilizer once in the spring.",
    image: "../images/medicinal_images/aloe-vera.jpg"
  },
  {
    id: 2,
    name: "Amla / Indian Gooseberry (Phyllanthus emblica)",
    price: 699,
    size: "3 to 8 feet (compact/potted size)",
    water: "Moderate watering. Soak thoroughly and let the top 2 inches dry between watering cycles.",
    fertilizer: "Apply organic compost or well-rotted manure twice a year during spring and monsoon.",
    image: "../images/medicinal_images/amla.jpg"
  },
  {
    id: 3,
    name: "Ashwagandha (Withania somnifera)",
    price: 399,
    size: "1.5 to 3 feet tall",
    water: "Requires dry to moderate conditions. Water when soil feels dry to the touch; avoid waterlogging.",
    fertilizer: "Feed once every month during the active growing phase with mild vermicompost.",
    image: "../images/medicinal_images/ashwagandha.jpg"
  },
  {
    id: 4,
    name: "Garlic Chives / Plant (Allium sativum)",
    price: 249,
    size: "12 to 18 inches tall",
    water: "Keep soil evenly moist but never soggy. Water when topsoil feels slightly dry.",
    fertilizer: "Apply a nitrogen-rich organic liquid feed every 3 to 4 weeks to encourage healthy shoots.",
    image: "../images/medicinal_images/garlic.jpg"
  },
  {
    id: 5,
    name: "Ginger Plant (Zingiber officinale)",
    price: 349,
    size: "2 to 3 feet tall",
    water: "Prefers consistent moisture and high humidity. Never let the rhizome sit in standing water.",
    fertilizer: "Incorporate organic compost or balanced slow-release fertilizer monthly during growth.",
    image: "../images/medicinal_images/ginger.jpg"
  },
  {
    id: 6,
    name: "Green Tea Plant (Camellia sinensis)",
    price: 649,
    size: "2 to 5 feet tall",
    water: "Requires consistent moisture in acidic, well-draining soil. Do not let roots dry out completely.",
    fertilizer: "Apply an acidic fertilizer formulated for camellias or azaleas once a month in spring.",
    image: "../images/medicinal_images/green-tea.jpg"
  },
  {
    id: 7,
    name: "Medicinal Hibiscus (Hibiscus rosa-sinensis)",
    price: 449,
    size: "3 to 6 feet tall",
    water: "Keep soil moist during warm blooming periods. Water deeply once the top inch feels dry.",
    fertilizer: "Feed with high-potassium, low-phosphorus fertilizer every 2 weeks during peak bloom.",
    image: "../images/medicinal_images/hibiscus.jpg"
  },
  {
    id: 8,
    name: "Lemongrass (Cymbopogon citratus)",
    price: 299,
    size: "2 to 4 feet tall clumps",
    water: "High water needs. Provide regular, abundant water and ensure pots have good drainage.",
    fertilizer: "Apply a general-purpose nitrogen-rich fertilizer every 3 to 4 weeks during spring and summer.",
    image: "../images/medicinal_images/lemon-grass.jpg"
  },
  {
    id: 9,
    name: "Pudina / Mint (Mentha spicata)",
    price: 199,
    size: "6 to 12 inches tall (vigorous spread)",
    water: "Prefers consistently moist soil. Water regularly whenever the topsoil begins to dry.",
    fertilizer: "Feed every 4 to 6 weeks with a diluted balanced liquid houseplant food.",
    image: "../images/medicinal_images/mint.jpg"
  },
  {
    id: 10,
    name: "Neem Tree (Azadirachta indica)",
    price: 599,
    size: "4 to 10 feet tall (container grown)",
    water: "Drought-tolerant once established. Water thoroughly when the top 2 inches dry out completely.",
    fertilizer: "Feed once in early spring with vermicompost or balanced organic plant food.",
    image: "../images/medicinal_images/neem.jpg"
  },
  {
    id: 11,
    name: "Holy Basil / Tulsi (Ocimum sanctum)",
    price: 199,
    size: "1 to 2 feet tall",
    water: "Water thoroughly when top layer of soil dries. Avoid overwatering in cooler winter months.",
    fertilizer: "Feed with vermicompost or liquid seaweed feed once every 3 to 4 weeks.",
    image: "../images/medicinal_images/tulsi.jpg"
  },
  {
    id: 12,
    name: "Turmeric Plant (Curcuma longa)",
    price: 449,
    size: "2 to 3 feet tall",
    water: "Keep soil evenly moist throughout the summer growing phase. Taper watering as foliage yellows in winter.",
    fertilizer: "Apply all-purpose organic compost or mild liquid fertilizer every month until harvest time.",
    image: "../images/medicinal_images/turmeric.jpg"
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
  const plant = medicinalPlantsData.find((p) => p.id === plantId);
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
  const plant = medicinalPlantsData.find((p) => p.id === plantId);
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
      renderPlantCards(medicinalPlantsData);
      return;
    }

    const filtered = medicinalPlantsData.filter((plant) =>
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
        renderPlantCards(medicinalPlantsData);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlantCards(medicinalPlantsData);
  updateCounters();
  setupSearchToggle();
  setupLiveSearch();
});