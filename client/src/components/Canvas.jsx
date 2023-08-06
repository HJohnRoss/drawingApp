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
    loadCanvas()
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
      ctx.fillRect(100, 0, 100, 200);

      ctx.fillStyle = "red"


      ctx.fillRect(100, 500, 100, 200);
    }
  }

  return <canvas ref={canvasRef}></canvas>
}

export default Canvas;