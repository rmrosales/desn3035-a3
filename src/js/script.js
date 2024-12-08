

//navigation mobile fix
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
//querySelectorAll to target all links with class .nav-link

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
        document.body.style.left = "0";
        document.body.style.right = "0";
    } else {
        document.body.style.position = "static";
        document.body.style.overflow = "visible";
    }
    // document.getElementById("header").style.height = "100vh";
}

menuItems.forEach(item => {
    item.addEventListener("click", closeMobileMenu);
});
//close mobileMenu to show scroll section

function closeMobileMenu() {

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    document.body.style.position = "static";
    document.body.style.overflow = "visible";
    document.body.style.left = "0";
    document.body.style.right = "0";
}


//text typewriter effect
var i = 0;
var txt = 'Worldwide.';
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("green-gradient").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Trigger typewriter effect on page load
window.onload = typeWriter;

// Fade in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Trigger animation only once
        }
    });
}, { threshold: 0.1 });

// Apply observer to sections
document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});
