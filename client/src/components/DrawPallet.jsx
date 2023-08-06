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
    if(palletRef.current) {
      palletRef.current.style.left = `${window.innerWidth - 180}px`
    }
  })

  return (
    <section id="drawPallet" ref={palletRef}>
      <div className="drawPallet__moveable" onDragOver={(Event) => handleMoveable(Event)} draggable="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="drawPallet__moveable--svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      </div>
      <div className="drawPallet__stencils">
        <button>hello</button>
        <button>there</button>
        <button>good</button>
        <button>friend</button>
        <button>ciaran</button>
      </div>
    </section>
  )
}

export default DrawPallet;