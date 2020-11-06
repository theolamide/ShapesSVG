import React from 'react';
import SingleCircle from './SingleCircle.js';
import SingleRectangle from './SingleRectangle.js'

const SavedRender = ({myRef}) => {
    const savedShapes = JSON.parse(localStorage.getItem("existingProp")) || false

    let circles 
    let rectangles
    let circleMap
    let rectangleMap

    if(savedShapes){
        circles = savedShapes.filter(object => object.shapeType === "circle")
        rectangles = savedShapes.filter(object => object.shapeType === "rectangle")

        circleMap = circles.map(item=> (
                <div className="circleMapContainer" key={item.colorFill}>
                    {/* using colorFill as key is a bad choice. Will figure out a better choice if I had more time */}
                    <SingleCircle shapeProperties={item} />
                </div>
            ))

        rectangleMap = rectangles.map(item=> (
                <div className="circleMapContainer" key={item.colorFill}>
                    {/* using colorFill as key is a bad choice. Will figure out a better choice if I had more time */}
                    <SingleRectangle shapeProperties={item} />
                </div>
            ))
    };

    const clearCanvas = () => {
        localStorage.removeItem("existingProp")
        window.location.reload()
        alert("Canvas Cleared")
    }

    return(
        <div className="renderRoot" ref={myRef}>
            {/* Conditionally render heading. There are two conditionals here becasue of styling purposes.*/}
            { savedShapes ? 
                <h1>
                    Your Saved Shapes
                </h1> : 
                <h1>
                    LET'S MAKE SOME SHAPES
                </h1>
            }
            
            {/* Conditional render 2, for redered shapes or gif when local storage is empty*/}
            { savedShapes ?
                
                <span>
                    <button 
                    className="clearSavedButton"
                    onClick={clearCanvas}
                    >
                        Clear Canvas
                    </button>

                    {circleMap}
                    {rectangleMap}
                </span> : 
                <span>                
                    <iframe 
                        src="https://giphy.com/embed/1O2BRZcDgIfDsKMTbG"
                        title="Blank paper gif"
                        width="480" 
                        height="271" 
                        frameBorder="0"
                        style={{margin: "1rem"}}
                    >
                    </iframe>                
                </span>
            }
        </div>
    )
}

export default SavedRender;