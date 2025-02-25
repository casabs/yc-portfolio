// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,  // Adjust this offset as needed
                behavior: 'smooth'
            });
        }
    });
});


// Activate Navigation Link on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-pills .nav-link");

    function activateNav() {
        let scrollPosition = window.scrollY + 200;

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateNav);
    activateNav();
});

// Copy to clipboard
function copyToClipboard(event, text, type) {
    event.preventDefault();
    navigator.clipboard.writeText(text);

    let toast = document.getElementById("toast");
    toast.innerText = `The ${type} has been copied to the clipboard!`;
    toast.style.display = "block";

    setTimeout(() => toast.style.display = "none", 2500);
}

// Modal
document.addEventListener("DOMContentLoaded", function () {
    const certiModal = document.getElementById('certiModal');
    certiModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget;
        let imgSrc = button.getAttribute('data-img');
        let imgTitle = button.getAttribute('data-title');

        console.log("Image Source:", imgSrc);
        console.log("Image Title:", imgTitle);

        if (imgSrc) {
            document.getElementById('modalImage').src = imgSrc;
            document.getElementById('certiModalLabel').textContent = imgTitle;
        } else {
            document.getElementById('modalImage').src = "/assets/images/code-logo.png";
        }
    });
});

