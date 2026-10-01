
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    // Open / close mobile menu
    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-open");

    });


    // Close menu when clicking a navigation link
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("mobile-open");

        });

    });

}


const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const counterObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const counter = entry.target;

                    const target = Number(
                        counter.getAttribute("data-target")
                    );

                    let current = 0;

                    const increment = target / 80;


                    function updateCounter() {

                        current += increment;


                        if (current < target) {

                            counter.textContent =
                                Math.floor(current);

                            requestAnimationFrame(updateCounter);

                        } else {

                            counter.textContent =
                                target + "+";

                        }

                    }


                    updateCounter();

                    // Stop observing after animation
                    observer.unobserve(counter);

                }

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });

}


function showClub(clubName) {

    alert(
        clubName +
        "\n\nWelcome to the " +
        clubName +
        "!" +
        "\n\nClick Join Club to become a member."
    );

}


function joinClub(clubName) {

    alert(
        "Thank you for joining " +
        clubName +
        "!\n\n" +
        "We will contact you soon."
    );

}


document.addEventListener("DOMContentLoaded", function () {

    console.log("Student Club website loaded successfully.");

});

