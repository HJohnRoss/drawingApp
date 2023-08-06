import Canvas from "../../components/Canvas";
import DrawPallet from "../../components/DrawPallet";

const CanvasView = () => {



  return (
    <>
      <div className="canvas__container">
        <Canvas />
      </div>

      <DrawPallet />
    </>
  )
}

export default CanvasView;