const favorites = document.querySelectorAll(".favorite");
const priceButtons = document.querySelectorAll(".price");
const cartCount = document.getElementById("cartCount");
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

let cart = 2;

favorites.forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }
    });
});

priceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (!button.classList.contains("added")) {
            cart++;
            cartCount.textContent = cart;
            button.classList.add("added");
            button.textContent = "Added ✓";
        }
    });
});

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});