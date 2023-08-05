const palletSection = document.getElementById("drawPallet");
const stencils = document.getElementsByClassName("drawPallet__stencils");
const movable = document.getElementsByClassName("drawPallet__moveable"); 4
let cursorPosition = { x: null, y: null}

// how to add children elements
// palletSection.appendChild(document.createElement("div"));

const handleMoveable = (event) => {
  let styling = palletSection.style
  cursorPosition = { x: event.clientX, y: event.clientY }

  styling.top = `${cursorPosition.y - 20}px`
  styling.left = `${cursorPosition.x - 70}px`
}
