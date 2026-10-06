const outdoorPlantsData = [
  {
    id: 1,
    name: "Desert Rose (Adenium obesum)",
    price: 699,
    size: "1 to 3 feet tall",
    water: "Allow soil to dry out completely between waterings. Highly drought-tolerant; avoid overwatering.",
    fertilizer: "Apply a balanced liquid fertilizer once a month during spring and summer.",
    image: "../images/outdoor_images/adenium-color-plant.webp"
  },
  {
    id: 2,
    name: "Arabian Jasmine / Mogra (Jasminum sambac)",
    price: 499,
    size: "3 to 6 feet tall",
    water: "Keep soil evenly moist, especially during hot flowering periods. Water when the top inch of soil is dry.",
    fertilizer: "Feed with a potassium- and phosphorus-rich fertilizer every 3 to 4 weeks during the bloom season.",
    image: "../images/outdoor_images/arabian-jasmine.jpg"
  },
  {
    id: 3,
    name: "Night-Blooming Jasmine (Cestrum nocturnum)",
    price: 449,
    size: "6 to 10 feet tall",
    water: "Requires moderate watering. Keep soil moist but not soggy, watering thoroughly when topsoil begins to dry.",
    fertilizer: "Apply a general-purpose balanced granular or liquid fertilizer once every 4 to 6 weeks in spring.",
    image: "../images/outdoor_images/blooming-jasmine-plant.jpg"
  },
  {
    id: 4,
    name: "Insulin Plant (Costus igneus)",
    price: 399,
    size: "2 to 3 feet tall",
    water: "Water regularly to keep the soil consistently moist. Avoid allowing the soil to dry out completely.",
    fertilizer: "Feed every month with an organic compost or mild balanced liquid fertilizer during growing season.",
    image: "../images/outdoor_images/costus-igneus-plant.jpg"
  },
  {
    id: 5,
    name: "Curry Leaf Plant (Murraya koenigii)",
    price: 349,
    size: "3 to 8 feet tall",
    water: "Allow top 1 to 2 inches of soil to dry out before watering thoroughly. Do not overwater to prevent root rot.",
    fertilizer: "Feed monthly during active spring and summer growth with nitrogen-rich fertilizer or diluted buttermilk/compost.",
    image: "../images/outdoor_images/curry-leaves.webp"
  },
  {
    id: 6,
    name: "Moringa / Drumstick Tree (Moringa oleifera)",
    price: 549,
    size: "10 to 30 feet tall (can be pruned lower)",
    water: "Very drought-tolerant once established. Water deeply once or twice a week when soil is dry.",
    fertilizer: "Light feeder; top-dress with aged manure or organic compost once or twice a year.",
    image: "../images/outdoor_images/drumsticks.jpg"
  },
  {
    id: 7,
    name: "Lemon Tree (Citrus limon)",
    price: 799,
    size: "6 to 12 feet tall",
    water: "Deep, infrequent watering. Soak the root ball thoroughly when the top 2 inches of soil become dry.",
    fertilizer: "Apply a citrus-specific fertilizer rich in nitrogen and micronutrients (iron, zinc) every 6 to 8 weeks.",
    image: "../images/outdoor_images/lemon-tree-plant.jpg"
  },
  {
    id: 8,
    name: "Miniature Rose (Rosa chinensis minima)",
    price: 449,
    size: "1 to 2 feet tall",
    water: "Water deeply when the top inch of soil feels dry. Water at the base to avoid wet foliage.",
    fertilizer: "Use a balanced rose fertilizer every 2 to 3 weeks during the blooming period.",
    image: "../images/outdoor_images/miniature-rose.jpg"
  },
  {
    id: 9,
    name: "Parijat / Night-flowering Jasmine (Nyctanthes arbor-tristis)",
    price: 599,
    size: "6 to 15 feet tall",
    water: "Moderate water needs. Water when the topsoil feels dry, reducing watering in cooler months.",
    fertilizer: "Feed with organic compost or a slow-release balanced fertilizer at the start of spring and autumn.",
    image: "../images/outdoor_images/night-flowering-jasmine-plant.jpg"
  },
  {
    id: 10,
    name: "Orange Rose (Rosa spp.)",
    price: 499,
    size: "2 to 4 feet tall",
    water: "Requires consistent moisture. Deeply water 2 to 3 times a week depending on ambient heat.",
    fertilizer: "Apply specialized rose food every 3 to 4 weeks from early spring through summer.",
    image: "../images/outdoor_images/oraneg-rose-plant.webp"
  },
  {
    id: 11,
    name: "Orange Tree (Citrus sinensis)",
    price: 899,
    size: "8 to 15 feet tall",
    water: "Provide thorough watering every 7 to 10 days, allowing the surface soil to dry out between sessions.",
    fertilizer: "Feed with high-nitrogen citrus plant food 3 times a year (spring, summer, and early autumn).",
    image: "../images/outdoor_images/orange-fruit.jpg"
  },
  {
    id: 12,
    name: "Pomegranate (Punica granatum)",
    price: 749,
    size: "6 to 12 feet tall",
    water: "Drought-tolerant once established; water deeply every 1 to 2 weeks for optimal fruit production.",
    fertilizer: "Apply a balanced fertilizer or compost once in late winter and again in late spring.",
    image: "../images/outdoor_images/pomegranate.jpg"
  },
  {
    id: 13,
    name: "Garden Rose (Rosa spp.)",
    price: 499,
    size: "3 to 5 feet tall",
    water: "Keep soil evenly moist. Provide 1 to 2 inches of water per week, targeting the soil base.",
    fertilizer: "Feed every 2 to 4 weeks with a bloom-boosting liquid rose fertilizer during active flowering.",
    image: "../images/outdoor_images/rose-color-plant.jpg"
  },
  {
    id: 14,
    name: "Round Black Planter Pot",
    price: 199,
    size: "10 inches diameter x 9 inches height",
    water: "N/A (Accessory / Planter with drainage holes)",
    fertilizer: "N/A (Durable UV-stabilized plastic outdoor pot)",
    image: "../images/outdoor_images/round-black-pot.webp"
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
  const plant = outdoorPlantsData.find((p) => p.id === plantId);
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
  const plant = outdoorPlantsData.find((p) => p.id === plantId);
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
      renderPlantCards(outdoorPlantsData);
      return;
    }

    const filtered = outdoorPlantsData.filter((plant) =>
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
        renderPlantCards(outdoorPlantsData);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlantCards(outdoorPlantsData);
  updateCounters();
  setupSearchToggle();
  setupLiveSearch();
});