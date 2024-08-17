document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        loader.style.display = "none";
        content.style.display = "block";
        document.body.classList.remove("loading");
    });

    // Simulate loading time (for testing purposes)
    setTimeout(function() {
        window.dispatchEvent(new Event('load'));
    }, 6000); // 2 seconds
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 1000; // The lower the speed, the faster the counter

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;

                        const increment = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount();
                });
                counterObserver.disconnect(); // Stop observing once animation is done
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentCard = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove("active");
            if (i === index) {
                card.classList.add("active");
            }
        });
    }

    function nextCard() {
        currentCard = (currentCard + 1) % cards.length;
        showCard(currentCard);
    }

    function prevCard() {
        currentCard = (currentCard - 1 + cards.length) % cards.length;
        showCard(currentCard);
    }

    nextBtn.addEventListener("click", nextCard);
    prevBtn.addEventListener("click", prevCard);

    // Auto-play functionality (optional)
    setInterval(nextCard, 5000); // Change slide every 5 seconds
});
