import React from 'react';
import SingleCircle from './SingleCircle.js';
import SingleRectangle from './SingleRectangle.js'

const SavedRender = () => {
    const savedShapes = JSON.parse(localStorage.getItem("existingProp")) || false
    // console.log("savedShapes", savedShapes)
    let circles 
    let rectangles
    let circleMap
    let rectangleMap
    if(savedShapes){
        circles = savedShapes.filter(object => Object.keys(object).length === 2)
        rectangles = savedShapes.filter(object => Object.keys(object).length === 3)

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
    // console.log("circles", circles)
    // console.log("rectangles", rectangles)
    // console.log("circleMap", circleMap)
    // console.log("rectangleMap", rectangleMap)
    return(
        <div className="renderRoot">
            {circleMap}
            {rectangleMap}
        </div>
    )
}

export default SavedRender;