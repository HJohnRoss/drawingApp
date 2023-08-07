import { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState()

  useEffect(() => {
    setCanvas(canvasRef.current)


    setCtx(canvasRef.current.getContext("2d"));


    // canvas bg color
    canvasRef.current.style.background = "#fff"

    if (ctx) {
      window.addEventListener("load", fixRatio(), loadCanvas());
    }

  }, [canvas, ctx])

  window.addEventListener('resize', function () {
    fixRatio()
    // loadCanvas()
  })

  function fixRatio() {
    if (ctx) {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
  }

  let is_drawing = false
  let drawWidth = 5
  let drawColor = "black"

  function loadCanvas() {
    // all of the preloaded objects in the canvas
    if (ctx) {
      ctx.fillStyle = "white"

      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  if(canvasRef.current) {
    canvas.addEventListener("touchstart", start)
    canvas.addEventListener("mousedown", start)
    canvas.addEventListener("mousemove", draw)
    canvas.addEventListener("touchmove", draw)
    canvas.addEventListener("mouseup", () => is_drawing = false)
    canvas.addEventListener("mouseout", () => is_drawing = false)
    canvas.addEventListener("touchend", () => is_drawing = false)
  }


  function start(event) {
    if (ctx) {
      is_drawing = true;
      ctx.beginPath();
      ctx.lineWidth = drawWidth;
      ctx.strokeStyle = drawColor;
      ctx.fillStyle = drawColor;
      ctx.lineCap = "round"
      ctx.lineCap = "round"
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke()
    }
  }
  
  function draw(event) {
    if (is_drawing && ctx) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
    }
  }
  
  return <canvas ref={canvasRef}></canvas>
}

export default Canvas;