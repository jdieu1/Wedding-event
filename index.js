// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// COUNTDOWN TIMER

const weddingDate = new Date("December 20, 2026 10:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(countdown);

        document.querySelector(".timer").innerHTML =
        "<h2>🎉 Wedding Day Has Arrived! 🎉</h2>";
    }

},1000);

// RSVP FORM

const form = document.getElementById("rsvpForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    successMessage.innerHTML =
    "✅ Thank you! Your attendance has been confirmed.";

    form.reset();
});

// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    reveals.forEach(element=>{

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);

revealElements();

// ======================
// GALLERY LIGHTBOX
// ======================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;
    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});


// ======================
// BACKGROUND MUSIC
// ======================

const music =
document.getElementById("weddingMusic");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!isPlaying){

        music.play();

        musicBtn.innerHTML =
        "🔇 Stop Music";

        isPlaying = true;

    }else{

        music.pause();

        musicBtn.innerHTML =
        "🎵 Play Music";

        isPlaying = false;
    }

});