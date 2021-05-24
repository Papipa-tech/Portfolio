"use strict";

const c = document.getElementById("c");
const ctx = c.getContext("2d");

// Making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// Characters that are used for matrix effect
let matrix = "01";
// Converting the string into an array of single characters
matrix = matrix.split("");

const font_size = 15;
const columns = c.width / font_size; // Number of columns for the rain
// An array of drops - one per column
const drops = [];
// x below is the x coordinate
// 1 = y co-ordinate of the drop(same for every drop initially)
for (let x = 0; x < columns; x++) drops[x] = 1;

// Drawing the characters
function draw() {
  // Black BG for the canvas
  // Translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = "#008f00"; // Green text
  ctx.font = font_size + "px roboto mono";
  // looping over drops
  for (let i = 0; i < drops.length; i++) {
    // A random chinese character to print
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    // x = i * font_size, y = value of drops [i] * font_size
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    // Sending the drop back to the top randomly after it has crossed the screen
    // Adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

    // Incrementing Y coordinate
    drops[i]++;
  }
}

setInterval(draw, 35);
