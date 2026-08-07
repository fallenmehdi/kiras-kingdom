// Mobile menu
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

if (menu && nav) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// Smooth reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Button effect
document.querySelectorAll(".btn, .outline").forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});

// Current year
const year = new Date().getFullYear();
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${year} Kira's Kingdom — Fan-made project by Mehdi Bahri.`;
}
