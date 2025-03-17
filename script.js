// Fonction pour Streamlit Slider
function moveStreamlitSlide(direction) {
    const slider = document.querySelector(".streamlit-slider .slides");
    if (!slider) return; // Vérifie si l'élément existe

    const slides = slider.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    slides[activeIndex].classList.remove("active");
    slides[activeIndex].style.display = "none"; // Cache l'ancienne slide

    activeIndex = (activeIndex + direction + slides.length) % slides.length;

    slides[activeIndex].classList.add("active");
    slides[activeIndex].style.display = "block"; // Affiche la nouvelle slide
}
