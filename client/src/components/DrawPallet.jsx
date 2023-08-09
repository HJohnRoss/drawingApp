/* eslint-disable react/prop-types */
import { useRef } from "react";

const DrawPallet = ({ drawing, pathsry, ctx }) => {
  1
  const palletRef = useRef(null);

  const handleMoveable = (Event) => {
    if (Event.clientX > 100 && Event.clientX < window.innerWidth - 100) {
      palletRef.current.style.left = `${Event.clientX - 70}px`
    }
    if (Event.clientY > 30 && Event.clientY < window.innerHeight - 630) {
      palletRef.current.style.top = `${Event.clientY - 20}px`
    }
  }

  window.addEventListener('resize', function () {
    if (palletRef.current) {
      palletRef.current.style.left = `${window.innerWidth - 180}px`
    }
  })


  const buttons = [
    { name: "Undo" },
    { name: "Clear" },
    { name: "eraser", color: "white" },
    { name: "red", color: "red" },
    { name: "blue", color: "blue" },
    { name: "green", color: "green" },
    { name: "yellow", color: "yellow" }
  ];

  const sizes = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48, 64, 128
  ]

  const drawPaths = () => {
    if(ctx && pathsry.length > 0) {
      console.log(pathsry)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      pathsry.forEach(path => {
        ctx.beginPath()
        ctx.moveTo(path[0].x, path[0].y)
        console.log(path)
        for(let i = 1; i < path.length; i++) {

          ctx.lineTo(path[i].x, path[i].y)
        }
        ctx.stroke()
      })
    }
  }

  const handleBtn = (btn) => {
    if (btn === "Undo") {
      pathsry.splice(-1,1);
      drawPaths()
    } else if (btn === "Clear") {
      // will probably have to setup a better way for state management
    } else {
      drawing.color = btn
    }
  }

  const handleSize = (size) => {
    drawing.width = size;
  }

  return (
    <section id="drawPallet" ref={palletRef}>
      <div className="drawPallet__moveable" onDragOver={(Event) => handleMoveable(Event)} draggable="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="drawPallet__moveable--svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <div className="drawPallet__stencils">
        {
          buttons.map((btn, i) =>
            btn.name === "eraser" ?
              <button key={i} onClick={() => handleBtn(btn.name)} className="drawPallet--btn" >{btn.name}</button>
              :
              btn.color ?
                <button key={i} onClick={() => handleBtn(btn.color)} className={"drawPallet--color"} style={{ backgroundColor: btn.color, height: '30px', width: '30px' }}></button>
                :
                <button key={i} onClick={() => handleBtn(btn.name)} className="drawPallet--btn" >{btn.name}</button>
          )
        }
        <input type="color" id="colorPicker" onChange={(e) => handleBtn(e.target.value)}></input>
        <select name="" id="" onChange={(e) => handleSize(e.target.value)}>
          {
            sizes.map((size, i) =>
              size === drawing.width ?
                <option key={i} value={size} selected>{size}px</option>
                :
                <option key={i} value={size}>{size}px</option>
            )
          }
        </select>
      </div>
    </section>
  )
}


export default DrawPallet;