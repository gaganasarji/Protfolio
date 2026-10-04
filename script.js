document.addEventListener("DOMContentLoaded", () => {


    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    if (menuIcon && navLinks) {

        menuIcon.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const icon = menuIcon.querySelector("i");

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });



        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                const icon = menuIcon.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }




    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });



    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });


    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    const revealElements = document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item, .about-content, .about-image"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    const skillCards = document.querySelectorAll(".skill-card");

    skillCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 80}ms`;

    });


    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 100}ms`;

    });


    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();



    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !subject || !message) {

                alert("Please fill in all the fields.");

                return;

            }


            /* Create mail */

            const mailSubject =
                encodeURIComponent(subject);

            const mailBody =
                encodeURIComponent(
                    `Hello Gagana,\n\n` +
                    `Name: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${message}`
                );


            window.location.href =
                `mailto:gaganasarji29@gmail.com?subject=${mailSubject}&body=${mailBody}`;


            contactForm.reset();

        });

    }


    document.querySelectorAll(".disabled-demo").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.title = "Live demo is currently unavailable";

        });

    });


    const profileImage =
        document.querySelector(".profile-photo");

    if (profileImage) {

        profileImage.addEventListener("error", () => {

            console.log(
                "Profile image could not be loaded. Check the image path."
            );

        });

    }



    document.body.classList.add("loaded");

});