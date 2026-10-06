const succulentsData = [
  {
    id: 1,
    name: "Bear's Paw (Cotyledon tomentosa)",
    price: 299,
    size: "6 to 12 inches tall",
    water: "Allow potting mix to dry out completely between waterings. Avoid wetting the fuzzy leaves directly.",
    fertilizer: "Apply a diluted cactus/succulent fertilizer once or twice during the spring and summer growing season.",
    image: "../images/succulents_images/bear-paw.jpg"
  },
  {
    id: 2,
    name: "Bunny Ears Cactus (Opuntia microdasys)",
    price: 349,
    size: "1 to 2 feet tall",
    water: "Very drought-tolerant. Water every 2 to 3 weeks in summer; withhold water during the winter dormant phase.",
    fertilizer: "Feed with a half-strength balanced cactus fertilizer once in late spring.",
    image: "../images/succulents_images/bunny-ear-cactus.jpg"
  },
  {
    id: 3,
    name: "Burro's Tail (Sedum morganianum)",
    price: 399,
    size: "Cascading stems up to 3 to 4 feet long",
    water: "Allow soil to dry out almost completely between deep waterings. Overwatering makes the plump leaves drop.",
    fertilizer: "Feed once a month with a balanced, diluted succulent feed throughout spring and summer.",
    image: "../images/succulents_images/burro's-tail.jpg"
  },
  {
    id: 4,
    name: "Christmas Cactus (Schlumbergera bridgesii)",
    price: 449,
    size: "6 to 12 inches tall, trailing up to 2 feet",
    water: "Water when the top inch of soil feels dry. Unlike desert succulents, they prefer moderate, consistent moisture.",
    fertilizer: "Apply a balanced liquid fertilizer monthly from late winter through early autumn.",
    image: "../images/succulents_images/christmas-cactus.jpg"
  },
  {
    id: 5,
    name: "Echeveria (Echeveria elegans)",
    price: 249,
    size: "4 to 8 inches wide and tall",
    water: "Use the soak-and-dry method. Avoid pouring water directly into the center rosette to prevent crown rot.",
    fertilizer: "Feed with an organic succulent food once or twice in spring.",
    image: "../images/succulents_images/echeveria.jpg"
  },
  {
    id: 6,
    name: "Ghost Plant (Graptopetalum paraguayense)",
    price: 299,
    size: "Stems up to 12 inches long with trailing rosettes",
    water: "Water thoroughly when soil is completely dry. Extremely heat and drought-tolerant.",
    fertilizer: "Apply half-strength liquid succulent fertilizer once every 4 to 6 weeks from spring to summer.",
    image: "../images/succulents_images/ghost-plant.jpg"
  },
  {
    id: 7,
    name: "Jade Plant (Crassula ovata)",
    price: 349,
    size: "1 to 3 feet tall (can grow larger with age)",
    water: "Water when the top 1 to 2 inches of soil feel bone-dry. Reduce drastically in winter.",
    fertilizer: "Feed every 1 to 2 months during the active spring and summer growing period.",
    image: "../images/succulents_images/jade-plant.jpg"
  },
  {
    id: 8,
    name: "Living Stones / Lithops (Lithops spp.)",
    price: 249,
    size: "1 to 2 inches tall",
    water: "Extremely low water needs. Water sparingly in autumn and spring; do not water during summer dormancy or winter leaf split.",
    fertilizer: "Generally do not require fertilizer.",
    image: "../images/succulents_images/living-stone.jpg"
  },
  {
    id: 9,
    name: "Moon Cactus (Gymnocalycium mihanovichii)",
    price: 329,
    size: "3 to 6 inches tall",
    water: "Allow soil to completely dry out between waterings. Use pots with ample drainage.",
    fertilizer: "Feed monthly in spring and summer with a cactus fertilizer diluted to half strength.",
    image: "../images/succulents_images/moon-cactus.jpg"
  },
  {
    id: 10,
    name: "Panda Plant (Kalanchoe tomentosa)",
    price: 279,
    size: "1 to 1.5 feet tall",
    water: "Water only when the potting mix is completely dry. Water directly into the soil to avoid wetting fuzzy leaves.",
    fertilizer: "Apply a diluted balanced houseplant fertilizer once a month from spring through mid-autumn.",
    image: "../images/succulents_images/panda-plant.jpg"
  },
  {
    id: 11,
    name: "String of Pearls (Senecio rowleyanus)",
    price: 399,
    size: "Trailing vines 1 to 3 feet long",
    water: "Water bottom-up or soak thoroughly only when the beads slightly soften and topsoil is bone-dry.",
    fertilizer: "Feed bi-weekly at quarter strength during spring and summer.",
    image: "../images/succulents_images/string-of-pearls.jpg"
  },
  {
    id: 12,
    name: "Zebra Haworthia (Haworthiopsis fasciata)",
    price: 269,
    size: "3 to 6 inches tall",
    water: "Allow soil to dry out completely between waterings. Highly resilient against underwatering.",
    fertilizer: "Feed lightly once or twice a year in the spring.",
    image: "../images/succulents_images/zebra-haworthia.jpg"
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
  const plant = succulentsData.find((p) => p.id === plantId);
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
  const plant = succulentsData.find((p) => p.id === plantId);
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
      renderPlantCards(succulentsData);
      return;
    }

    const filtered = succulentsData.filter((plant) =>
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
        renderPlantCards(succulentsData);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlantCards(succulentsData);
  updateCounters();
  setupSearchToggle();
  setupLiveSearch();
});