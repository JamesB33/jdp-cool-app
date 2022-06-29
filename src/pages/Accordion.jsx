import React from "react";
import { useState } from "react";

function Accordion({ rainbow, sightings, setSightings }) {
  const [activeClass, setActiveClass] = useState(null);

  const toggleAccord = (i) => {
    if (activeClass === i) {
      setActiveClass(null);
    }
    setActiveClass(i);
  };

  // const binoculars = () => setSightings(sightings + 1);

  const elephant = (i) => {
    const prize = Math.floor(Math.random() * rainbow.length);
    console.log("prize", prize, i);
    if (i === prize && activeClass === i) {
      // setSightings(sightings + 1)
      return true;
    }
    // return false;
    
  };

  return (
    <div className="color-boxes">
      {rainbow.map((color, i) => {
        return (
          <div
            key={i}
            onClick={() => toggleAccord(i)}
            className={`bow ${activeClass === i ? "open" : "close"}`}
            style={{ backgroundColor: `${color}` }}
          >
            {color}
            <div className="image">
              {elephant(i)
                ? (
                  <>
                  
                  <p>Click Me</p>
                    <img
                      src="/pinkFE.webp"
                      alt={"flyingPinkElephant"}
                      onClick={() => {
                        setSightings(sightings + 1)
                        elephant(false)
                      }}
                    />
                  </>
                  )
                : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
