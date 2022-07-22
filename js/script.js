"use strict";

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const projectsContent = document.querySelector("#projects-content");
// const mainContainer = document.querySelector(".mainTxt");
// const leftPill = document.querySelector("#leftPill");
// const btn = document.querySelector("#hide-btn");
// const slika = document.querySelector("#show-image");

// Hide nav and link initially
// mainContainer.classList.add("hidden");

// Morpheus voice sound
// const playSound = function () {
//   const sound = document.getElementById("audio");
//   sound.play();
// };

//Hide button, play sound and show image
// btn.addEventListener("click", () => {
//   slika.classList.remove("hidden");
//   btn.classList.add("hidden");
//   playSound();
// });

// Red pill button functionality
// leftPill.addEventListener("click", () => {
//   mainContainer.classList.remove("hidden");
//   slika.classList.add("hidden");
//   btn.classList.add("hidden");
// });

// About window
about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "60%" : "70%",
    x: window.mobileCheck() ? "center" : "4%",
    y: window.mobileCheck() ? "center" : "4%",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Projects window
projects.addEventListener("click", () => {
  const projecttBox = new WinBox({
    title: "My Projects",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "90%" : "80%",
    x: window.mobileCheck() ? "center" : "8%",
    y: window.mobileCheck() ? "center" : "8%",
    mount: projectsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// Contact window
contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    modal: window.mobileCheck() ? true : false,
    width: window.mobileCheck() ? "90%" : "30%",
    height: window.mobileCheck() ? "70%" : "60%",
    x: window.mobileCheck() ? "center" : "12%",
    y: window.mobileCheck() ? "center" : "12%",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
