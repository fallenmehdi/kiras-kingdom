/* ==================================================
   KIRA'S KINGDOM
   JAVASCRIPT
================================================== */


/* ================= MOBILE MENU ================= */

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

}


/* ================= CLOSE MENU ================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


/* ================= VICTIM COUNTER ================= */

const counter = document.getElementById("counter");

let countStarted = false;

function animateCounter() {

    if (countStarted || !counter) return;

    countStarted = true;

    const target = 943;

    let current = 0;

    const duration = 1800;

    const startTime = performance.now();

    function updateCounter(currentTime) {

        const progress =
            Math.min((currentTime - startTime) / duration, 1);

        current = Math.floor(
            progress * target
        );

        counter.textContent =
            current.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent =
                target.toLocaleString();

        }

    }

    requestAnimationFrame(updateCounter);
}


/* Detect counter visibility */

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                animateCounter();

                counterObserver.disconnect();

            }

        });

    },
    {
        threshold: 0.5
    }
);


if (counter) {

    counterObserver.observe(counter);

}


/* ================= JUDGMENT BUTTON ================= */

const judgmentBtn =
    document.getElementById("judgmentBtn");

const judgmentMessage =
    document.getElementById("judgmentMessage");


if (judgmentBtn && judgmentMessage) {

    judgmentBtn.addEventListener("click", () => {

        judgmentMessage.textContent =
            "THE JUDGMENT HAS BEEN PASSED.";

        judgmentBtn.textContent =
            "JUDGMENT ACCEPTED";

        judgmentBtn.style.background =
            "transparent";

        judgmentBtn.style.color =
            "#e50914";

    });

}


/* ================= CURRENT YEAR ================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= BUTTON PRESS EFFECT ================= */

document
    .querySelectorAll(".main-btn")
    .forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform =
                "scale(0.96)";

            setTimeout(() => {

                button.style.transform =
                    "";

            }, 150);

        });

    });


/* ================= KIRA TITLE EFFECT ================= */

const logo =
    document.querySelector(".logo");

if (logo) {

    setInterval(() => {

        logo.style.textShadow =
            "0 0 15px rgba(229,9,20,0.7)";

        setTimeout(() => {

            logo.style.textShadow =
                "";

        }, 500);

    }, 3000);

}
