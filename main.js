import "./scss/index.scss";
import "./css/global.css";

const images = [
  "img-1 (1).jpeg",
  "img-2 (2).jpeg",
  "img-3 (2).jpeg",
  "img-3.jpeg",
  "img-4.jpeg",
  "img-4 (2).jpeg",
  "img-5.jpeg",
];

let currentIndex = 0;
const imageElement = document.getElementById("slideshow-image");
setInterval(() => {
  imageElement.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 1;
  }, 500);
}, 5000);

// Burger menu toggle
const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
