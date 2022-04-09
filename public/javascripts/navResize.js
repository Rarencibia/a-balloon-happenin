let hamburgerButton = document.getElementById("hamburgerButton");
let navUL = document.getElementById("navUL");
let mobileOptionsMenu = document.getElementById("mobileOptionsMenu");

hamburgerButton.addEventListener("click", () => {
    navUL.style.display = "none";
    mobileOptionsMenu.style.display = "block";

});