document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the input field
    const searchInput = document.getElementById("searchInput");

    // Add event listener for input event
    searchInput.addEventListener("input", function () {
        // Get the search query
        const query = searchInput.value.trim().toLowerCase();

        // Get all recipe cards
        const recipeCards = document.querySelectorAll(".card");

        // Flag to track if any matching recipes are found
        let foundMatch = false;

        // Loop through each recipe card
        recipeCards.forEach(function (card) {
            // Get the recipe title
            const title = card.querySelector(".card-title").innerText.toLowerCase();

            // Check if the title contains the search query
            if (title.includes(query)) {
                // If it does, show the card
                card.style.display = "block";
                foundMatch = true;
            } else {
                // If it doesn't, hide the card
                card.style.display = "none";
            }
        });

        // Update the placeholder text of the search input field
        if (foundMatch || query === "") {
            searchInput.placeholder = "Search for a juice...";
        } else {
            searchInput.placeholder = "No recipes found";
        }
    });
});

function showRecipe(id) {
var recipeContent = document.getElementById(id);
var modalContent = document.getElementById("modal-content");
modalContent.innerHTML = recipeContent.innerHTML;
document.getElementById('myModal').style.display = "block";
}

function closeModal() {
document.getElementById('myModal').style.display = "none";
}