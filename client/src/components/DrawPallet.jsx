import { useRef } from "react";

const DrawPallet = () => {
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
    { name: "red", color: "red" },
    { name: "blue", color: "blue" },
    { name: "green", color: "green" },
    { name: "yellow", color: "yellow" }
  ];

  const handleBtn = (btn) => { 
    if(btn === "Undo") {
      // need to setup undo button with canvas
    } else if(btn === "Clear") {
      // will probably have to setup a better way for state management
    } else {
      // setting up colors / brushes in future.
    }
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
            btn.color ?
              <button key={i} onClick={() => handleBtn(btn.color)} className={btn.color ? "drawPallet--color" : "drawPallet--btn"} style={{ backgroundColor: btn.color, height: '30px', width: '30px' }}></button>
              :
              <button key={i} onClick={() => handleBtn(btn.name)} className="drawPallet--btn" >{btn.name}</button>
          )
        }
        <input type="color" id="colorPicker"></input>
      </div>
    </section>
  )
}

export default DrawPallet;