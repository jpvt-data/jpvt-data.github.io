// Fonction pour Streamlit Slider
function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));

    // Désactiver l'ancienne slide
    slides[activeIndex].classList.remove("active");
    slides[activeIndex].style.display = "none";

    // Calculer le nouvel index
    activeIndex = (activeIndex + direction + slides.length) % slides.length;

    // Activer la nouvelle slide
    slides[activeIndex].classList.add("active");
    slides[activeIndex].style.display = "block";
}
