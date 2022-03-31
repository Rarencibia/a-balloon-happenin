let readMoreButton = document.getElementById("readMoreButton");
let readMoreContent = document.getElementById("readMoreContent");

readMoreButton.addEventListener("click", () => {
    readMoreContent.style.display = "block";
    readMoreContent.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})