// Header link hover effect
const menu = document.querySelector('.menu');

menu.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'A') {
        menu.querySelectorAll('a').forEach(item => {
            item.style.opacity = (item === event.target) ? 1 : 0.30;
        });
    }
});

menu.addEventListener('mouseout', () => {
    menu.querySelectorAll('a').forEach(item => {
        item.style.opacity = 1;
    });
});

// Header Scrolling logic - Adjust header design on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    const scrollPosition = window.scrollY;

    header.classList.toggle("scrolled", scrollPosition > 60);
});

// Smooth scroll for navigation logic
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
