let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.transform = `rotateY(${index * 120}deg)`;
    });
    setTimeout(() => {
        slides[currentSlide].style.transform = 'rotateY(0deg)';
    }, 1000);
}, 3000);
