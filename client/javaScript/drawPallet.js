const palletSection = document.getElementById("drawPallet");
const stencils = document.getElementsByClassName("drawPallet__stencils");
const movable = document.getElementsByClassName("drawPallet__moveable"); 4
let cursorPosition = { x: null, y: null}

// how to add children elements
// palletSection.appendChild(document.createElement("div"));

const handleMoveable = (event) => {
  if(event.clientX  > 100 && event.clientX < window.innerWidth - 100) {
    console.log(window.innerWidth, event.clientX)
    palletSection.style.left = `${event.clientX - 70}px`
  }
  if(event.clientY > 30 && event.clientY < window.innerHeight - 630) {
    palletSection.style.top = `${event.clientY - 20}px`
  }
}
