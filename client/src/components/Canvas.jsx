/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Canvas = ({ drawing, points, pathsry, ctx, setCtx}) => {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState();
  

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


  function loadCanvas() {
    // all of the preloaded objects in the canvas
    if (ctx) {
      ctx.fillStyle = "white"

      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  if (canvasRef.current) {
    canvas.addEventListener("touchstart", start)
    canvas.addEventListener("mousedown", start)

    canvas.addEventListener("mousemove", draw)
    canvas.addEventListener("touchmove", draw)

    canvas.addEventListener("mouseup", () => {
      drawing.isDrawing = false
      pathsry.push(points)
    })
    canvas.addEventListener("mouseout", () => {
      drawing.isDrawing = false
    })
    canvas.addEventListener("touchend", () => {
      drawing.isDrawing = false
    })
  }


  function start(event) {
    if (ctx) {
      drawing.isDrawing = true;
      ctx.beginPath();
      ctx.lineWidth = drawing.width;
      ctx.strokeStyle = drawing.color;
      ctx.fillStyle = drawing.color;
      ctx.lineCap = "round"
      ctx.lineCap = "round"
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke()
      points = [];
      points.push({x:event.offsetX, y:event.offsetX})
    }
  }
  
  function draw(event) {
    if (drawing.isDrawing && ctx) {
      points.push({x:event.offsetX, y:event.offsetX})
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
    }
  }

  return <canvas ref={canvasRef}></canvas>
}

export default Canvas;