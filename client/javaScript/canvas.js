const canvas = document.getElementById("canvas");
const container = document.getElementsByClassName("canvas__container");
const ctx = canvas.getContext("2d");

// canvas bg color
canvas.style.background = "#fff"

window.addEventListener('resize', function() {
  fixRatio()
  loadCanvas()
}, true);

window.addEventListener("load", fixRatio(), loadCanvas());

function loadCanvas() {
  // all of the preloaded objects in the canvas
  ctx.fillRect(100, 0, 100, 200);
  
  ctx.fillStyle = "red"
  
  
  ctx.fillRect(100, 500, 100, 200);
}

function fixRatio() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
