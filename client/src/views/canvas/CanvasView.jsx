import { useState } from "react";
import Canvas from "../../components/Canvas";
import DrawPallet from "../../components/DrawPallet";

const CanvasView = () => {
  let drawing = {
    isDrawing: false,
    width: 6,
    color: "black"
  }
  let points = []
  let pathsry = []
  const [ctx, setCtx] = useState()


  return (
    <>
      <div className="canvas__container">
        <Canvas
          drawing={drawing}
          points={points}
          pathsry={pathsry}
          ctx={ctx}
          setCtx={setCtx}
          />
      </div>

      <DrawPallet
        drawing={drawing}
        pathsry={pathsry}
        ctx={ctx}
      />
    </>
  )
}

export default CanvasView;