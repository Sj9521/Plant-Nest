function goBack() {
  if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
    history.back();
  } else {
    window.location.href = "../html/home.html";
  }
}

// LocalStorage helpers
function getStoredCart() {
  return JSON.parse(localStorage.getItem("plantnest_cart")) || [];
}

function getStoredWishlist() {
  return JSON.parse(localStorage.getItem("plantnest_wishlist")) || [];
}

// Toast Alert
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

// Header Badges
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

let answers = {
  sunlight: "",
  location: "",
  care: ""
};

let currentMatchedPlant = null;

function selectOption(element, category, value) {
  const parentContainer = element.parentElement;
  parentContainer.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("selected");
  });

  element.classList.add("selected");
  answers[category] = value;
}

function nextQuestion(current) {
  if (current === 1 && answers.sunlight === "") {
    alert("Please select your sunlight level to continue.");
    return;
  }

  if (current === 2 && answers.location === "") {
    alert("Please select your plant location to continue.");
    return;
  }

  document.getElementById("question" + current).classList.remove("active");
  document.getElementById("question" + (current + 1)).classList.add("active");

  updateProgress(current + 1);
}

function previousQuestion(current) {
  document.getElementById("question" + current).classList.remove("active");
  document.getElementById("question" + (current - 1)).classList.add("active");

  updateProgress(current - 1);
}

function updateProgress(step) {
  document.querySelectorAll(".step").forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById("step" + step).classList.add("active");

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");

  if (step >= 2) {
    line1.classList.add("active");
  } else {
    line1.classList.remove("active");
  }

  if (step >= 3) {
    line2.classList.add("active");
  } else {
    line2.classList.remove("active");
  }
}

const plants = [
  {
    id: 101,
    name: "Snake Plant",
    scientific: "Dracaena trifasciata",
    sunlight: "Low to bright indirect light",
    water: "Every 2 to 3 weeks",
    location: "Bedroom / Indoor",
    care: "Low",
    price: 499,
    description: "A hardy, air-purifying classic that tolerates neglect and low-light corners while maintaining its upright, sculptural form.",
    image: "../images/indoor_images/green-snake-plant.webp"
  },
  {
    id: 102,
    name: "Peace Lily",
    scientific: "Spathiphyllum wallisii",
    sunlight: "Low to medium indirect light",
    water: "Once a week",
    location: "Bedroom / Indoor",
    care: "Medium",
    price: 599,
    description: "An elegant tropical plant with glossy foliage and pristine white blooms. It visibly signals whenever it needs a drink.",
    image: "../images/indoor_images/peace-lily.webp"
  },
  {
    id: 103,
    name: "Aloe Vera",
    scientific: "Aloe barbadensis",
    sunlight: "Bright direct sunlight",
    water: "Every 2 to 3 weeks",
    location: "Balcony / Garden",
    care: "Low",
    price: 349,
    description: "A medicinal succulent that thrives when soaking up bright outdoor sunshine and requires minimal watering.",
    image: "../images/indoor_images/aloe-vera-aloe-houseplant.jpg"
  },
  {
    id: 104,
    name: "Money Plant",
    scientific: "Epipremnum aureum",
    sunlight: "Low to medium indirect light",
    water: "Once a week",
    location: "Bedroom / Balcony",
    care: "Low",
    price: 299,
    description: "A fast-growing, cascading vine that adapts effortlessly to almost any indoor spot or semi-shaded balcony.",
    image: "../images/indoor_images/pothos.webp"
  },
  {
    id: 105,
    name: "Spider Plant",
    scientific: "Chlorophytum comosum",
    sunlight: "Medium indirect light",
    water: "Once a week",
    location: "Bedroom / Balcony",
    care: "Low",
    price: 399,
    description: "A beginner-favorite that shoots out decorative ribbon foliage and baby offshoots. Safe for homes with pets.",
    image: "../images/indoor_images/spider-plant.webp"
  },
  {
    id: 106,
    name: "Monstera Deliciosa",
    scientific: "Monstera deliciosa",
    sunlight: "Bright indirect light",
    water: "Once a week",
    location: "Indoor / Balcony",
    care: "Medium",
    price: 799,
    description: "A show-stopping statement houseplant admired for its broad, iconic split leaves and lush tropical presence.",
    image: "../images/indoor_images/monstera.webp"
  },
  {
    id: 107,
    name: "Areca Palm",
    scientific: "Dypsis lutescens",
    sunlight: "Bright indirect light",
    water: "1 to 2 times a week",
    location: "Balcony / Garden",
    care: "Medium",
    price: 899,
    description: "Adds an instant oasis vibe with feather-soft fronds. Prefers bright, airy locations and consistent hydration.",
    image: "../images/air_purifying_images/bamboo-palm.jpg"
  },
  {
    id: 108,
    name: "Jade Plant",
    scientific: "Crassula ovata",
    sunlight: "Bright direct sunlight",
    water: "Every 2 to 3 weeks",
    location: "Balcony / Garden",
    care: "Low",
    price: 449,
    description: "A symbol of good luck and resilience, featuring thick jade-green leaves that thrive in sun-drenched spaces.",
    image: "../images/succulents_images/jade-plant.jpg"
  }
];

function findPlant() {
  if (answers.care === "") {
    alert("Please select your care level to view your match.");
    return;
  }

  let scoredPlants = [];

  plants.forEach((plant) => {
    let score = 0;

    if (answers.sunlight === "low") {
      if (["Snake Plant", "Peace Lily", "Money Plant"].includes(plant.name)) score += 3;
    } else if (answers.sunlight === "medium") {
      if (["Spider Plant", "Money Plant", "Peace Lily"].includes(plant.name)) score += 3;
    } else if (answers.sunlight === "bright") {
      if (["Aloe Vera", "Jade Plant", "Monstera Deliciosa", "Areca Palm"].includes(plant.name)) score += 3;
    }

    if (answers.location === "bedroom") {
      if (["Snake Plant", "Peace Lily", "Money Plant", "Spider Plant"].includes(plant.name)) score += 3;
    } else if (answers.location === "balcony") {
      if (["Aloe Vera", "Money Plant", "Spider Plant", "Monstera Deliciosa", "Areca Palm", "Jade Plant"].includes(plant.name)) score += 3;
    } else if (answers.location === "garden") {
      if (["Aloe Vera", "Areca Palm", "Jade Plant"].includes(plant.name)) score += 3;
    }

    if (answers.care === "low" && plant.care === "Low") {
      score += 4;
    } else if (answers.care === "medium" && plant.care === "Medium") {
      score += 4;
    } else if (answers.care === "high") {
      if (["Monstera Deliciosa", "Peace Lily", "Areca Palm"].includes(plant.name)) score += 4;
    }

    scoredPlants.push({
      plant: plant,
      score: score
    });
  });

  scoredPlants.sort((a, b) => b.score - a.score);

  currentMatchedPlant = scoredPlants[0].plant;

  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("plantImage").src = currentMatchedPlant.image;
  document.getElementById("plantImage").alt = currentMatchedPlant.name;
  document.getElementById("plantName").textContent = currentMatchedPlant.name;
  document.getElementById("scientificName").textContent = currentMatchedPlant.scientific;
  document.getElementById("plantDescription").textContent = currentMatchedPlant.description;
  document.getElementById("plantSunlight").textContent = currentMatchedPlant.sunlight;
  document.getElementById("plantWater").textContent = currentMatchedPlant.water;
  document.getElementById("plantLocation").textContent = currentMatchedPlant.location;
  document.getElementById("plantCare").textContent = currentMatchedPlant.care;
  document.getElementById("plantPrice").textContent = `₹${currentMatchedPlant.price}`;

  updateResultHeartUI();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Update Heart UI on Result View
function updateResultHeartUI() {
  const heartIcon = document.getElementById("resultHeartIcon");
  if (!heartIcon || !currentMatchedPlant) return;

  const wishlist = getStoredWishlist();
  const isSaved = wishlist.some((item) => item.id === currentMatchedPlant.id);

  if (isSaved) {
    heartIcon.className = "fa-solid fa-heart";
  } else {
    heartIcon.className = "fa-regular fa-heart";
  }
}

// Toggle Wishlist on Match
function toggleResultWishlist() {
  if (!currentMatchedPlant) return;

  let wishlist = getStoredWishlist();
  const index = wishlist.findIndex((item) => item.id === currentMatchedPlant.id);
  const heartIcon = document.getElementById("resultHeartIcon");

  if (index > -1) {
    wishlist.splice(index, 1);
    if (heartIcon) heartIcon.className = "fa-regular fa-heart";
    showToast(`Removed "${currentMatchedPlant.name}" from wishlist.`);
  } else {
    wishlist.push({
      id: currentMatchedPlant.id,
      name: currentMatchedPlant.name,
      price: currentMatchedPlant.price,
      image: currentMatchedPlant.image
    });
    if (heartIcon) heartIcon.className = "fa-solid fa-heart";
    showToast(`Added "${currentMatchedPlant.name}" to wishlist!`);
  }

  localStorage.setItem("plantnest_wishlist", JSON.stringify(wishlist));
  updateCounters();
}

// Add Matched Plant to Cart
function addCurrentMatchToCart() {
  if (!currentMatchedPlant) return;

  const cart = getStoredCart();
  const existingItem = cart.find((item) => item.id === currentMatchedPlant.id);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({
      id: currentMatchedPlant.id,
      name: currentMatchedPlant.name,
      price: currentMatchedPlant.price,
      image: currentMatchedPlant.image,
      quantity: 1
    });
  }

  localStorage.setItem("plantnest_cart", JSON.stringify(cart));
  updateCounters();
  showToast(`"${currentMatchedPlant.name}" has been added to your cart!`);
}

function tryAgain() {
  answers = {
    sunlight: "",
    location: "",
    care: ""
  };
  currentMatchedPlant = null;

  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  document.querySelectorAll(".question").forEach((question) => {
    question.classList.remove("active");
  });
  document.getElementById("question1").classList.add("active");

  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("selected");
  });

  updateProgress(1);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateCounters();
});