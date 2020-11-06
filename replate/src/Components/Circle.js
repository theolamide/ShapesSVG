import React , {useState} from 'react';
import SingleCircle from './SingleCircle.js';

// Initial Properties
const shapeProperties = {
    radius: "2",
    shapeType:"circle",
    colorFill: "#ffffff"
}

const Circle = ({saveShapes, executeScroll}) => {
    const [circleProps, setCircleProps] = useState(shapeProperties)
    
    const handleChange = event => {
        // Canvas has a set width and height. Prevent entering value that will over flow canvas space or lower than specified minimum to prevent going negative.
        let valueToCheck
        if (event.target.name === "radius"){
            valueToCheck = event.target.value
        }

        if (valueToCheck > 10 || valueToCheck < 0){
            alert("Maximum and Minimun allowed radius are 10 and 2 respectively")
        } else {
            setCircleProps({ ...circleProps, [event.target.name]: event.target.value})
        }    
    }


    const buttonClick = () => {
        saveShapes.bind(this, "existingProp", circleProps)()
        executeScroll()
    }

    return(
        <div className="toRender">
            <form className="shapeForms">
                <span className="shapeSpan">
                    <label htmlFor="radius">Radius: </label>
                    <input 
                        type="number"
                        max = "10"
                        min = "2"
                        name="radius"
                        onChange={handleChange}
                        value={circleProps.radius}
                    />
                </span>
                <span className="shapeSpan">
                    <label htmlFor="colorFill">Color: </label>
                    <input 
                        type="color" 
                        name="colorFill" 
                        value={circleProps.colorFill}
                        onChange={handleChange}
                    />
                </span>
            </form>
            
            <SingleCircle shapeProperties={circleProps} /> 
            <button 
                type="button"
                className="saveShapeButton"
                onClick={buttonClick}
            >
                Save Shape
            </button>
        </div>
    )
}

export default Circle;