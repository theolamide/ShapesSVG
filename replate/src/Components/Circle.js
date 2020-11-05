import React , {useState} from 'react';
import SingleCircle from './SingleCircle.js';

const shapeProperties = {
    radius: "2",
    colorFill: "#ffffff"
}

const Circle = ({saveShapes}) => {
    const [circleProps, setCircleProps] = useState(shapeProperties)
    
    const handleChange = event => {
    setCircleProps({ ...circleProps, [event.target.name]: event.target.value})
    }
    return(
        <div>
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
                onClick={saveShapes.bind(this, "existingProp", circleProps)}
            >
                Save Shape
            </button>
        </div>
    )
}

export default Circle;