"use strict";

// --------------------Navbar toggle button----------------------

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelector("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

// -----------------------------Stickey Header and backtotop-------------------------
const header = document.querySelector("[data-header]");
const backToTop = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backToTop.classList.add("active");
  } else {
    header.classList.remove("active");
    backToTop.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentSlide = 0;
  const slideInterval = setInterval(nextSlide, 3000);

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  nextButton.addEventListener("click", function () {
    clearInterval(slideInterval);
    nextSlide();
  });

  prevButton.addEventListener("click", function () {
    clearInterval(slideInterval);
    prevSlide();
  });
});

// -----------------------------Move Cycle on scroll-------------------------

const delievryboy = document.querySelector("[data-delievry-boy]");

let delievryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  let delievryBoyTopPos = delievryboy.getBoundingClientRect().top;

  if (delievryBoyTopPos < 500 && delievryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      delievryBoyMove++;
    } else {
      delievryBoyMove--;
    }

    lastScrollPos = activeScrollPos;

    delievryboy.style.transform = `translate(${delievryBoyMove}px)`;
  }
});

// ---------------------------------------------------swiper------------------------------------

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
