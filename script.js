// GitHub dil analizində JavaScript-in aktiv tanınması və konsol mesajı
console.log("OrudjovCPP Portfolio Loaded Successfully!");
console.log("Active Stack: HTML5, CSS3, JavaScript, Full-Stack Architecture");

document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector("h1");
    heroTitle.addEventListener("mouseover", () => {
        heroTitle.style.opacity = "0.95";
    });
});
