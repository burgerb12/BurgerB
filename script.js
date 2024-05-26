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

// -----------------------------Stickey Header-------------------------
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
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
