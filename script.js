const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const totalSlides = document.querySelectorAll("#slider div").length;
const slidesToShow = 3;

// Move slider
function updateSlider() {
    slider.style.transform = `translateX(-${index * (100 / slidesToShow)}%)`;
}

// Next button
nextBtn.addEventListener("click", () => {
    if (index < totalSlides - slidesToShow) {
        index++;
        updateSlider();
    }
});

// Prev button
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

// Auto-slide every 3s
setInterval(() => {
    if (index < totalSlides - slidesToShow) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
}, 3000);
