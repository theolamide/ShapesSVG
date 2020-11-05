import React from 'react';
import SingleCircle from './SingleCircle.js';
import SingleRectangle from './SingleRectangle.js'

const SavedRender = () => {
    const savedShapes = JSON.parse(localStorage.getItem("existingProp"))

    let circles 
    let rectangles
    if(savedShapes){
        circles = savedShapes.filter(object => Object.keys(object).length === 2)
        rectangles = savedShapes.filter(object => Object.keys(object).length === 3)
    };
    console.log("circles", circles)
    console.log("rectangles", rectangles)
    return(
        <div className="renderRoot">
            {circles.map(item=> (
                <div className="circleMapContainer" key={item.id}>
                    <SingleCircle shapeProperties={item} />
                </div>
            ))}
            {rectangles.map(item=> (
                <div className="circleMapContainer" key={item.id}>
                    <SingleRectangle shapeProperties={item} />
                </div>
            ))}
        </div>
    )
}

export default SavedRender;