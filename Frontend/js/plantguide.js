function goBack() {
    if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
        history.back();
    } 
    else {
        window.location.href = "../html/home.html";
        }
    }
document.addEventListener("DOMContentLoaded", () => {
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
function showProblem(problem) {

    let title = "";
    let cause = "";
    let solution = "";

    if (problem === "yellow") {

        title = "🍂 Yellow Leaves";

        cause = "Possible cause: Too much water, poor drainage or not enough light.";

        solution = "Solution: Check the soil before watering and make sure the pot has drainage holes.";

    }

    else if (problem === "brown") {

        title = "🍁 Brown Leaf Tips";

        cause = "Possible cause: Dry air, underwatering or too much fertilizer.";

        solution = "Solution: Check soil moisture and increase humidity if the plant needs it.";

    }

    else if (problem === "drooping") {

        title = "🌿 Drooping Leaves";

        cause = "Possible cause: Underwatering, overwatering or sudden temperature changes.";

        solution = "Solution: Check the soil first. Water only when the plant actually needs it.";

    }

    else if (problem === "slow") {

        title = "🐌 Slow Growth";

        cause = "Possible cause: Low light, lack of nutrients or unsuitable temperature.";

        solution = "Solution: Move the plant to a suitable light location and provide fertilizer when needed.";

    }

    document.getElementById("problem-result").innerHTML = `

        <h3>${title}</h3>

        <p>
            <strong>${cause}</strong>
        </p>

        <p style="margin-top: 12px;">
            ${solution}
        </p>

    `;
}


/* CHECKLIST */

const checkboxes = document.querySelectorAll(".checklist input");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        const label = this.parentElement;

        if (this.checked) {
            label.style.textDecoration = "line-through";
            label.style.opacity = "0.6";
        } else {
            label.style.textDecoration = "none";
            label.style.opacity = "1";
        }

    });

});