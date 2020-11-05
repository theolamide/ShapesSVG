import React, {useState} from 'react';
import SingleRectangle from './SingleRectangle.js';


const shapeProperties = {
    width: "3",
    height: "2",
    colorFill: "#C5302B"
}
const Rectangle = ({saveShapes}) => {

    const [rectProps, setRectProps] = useState(shapeProperties)

    const handleChange = event => {
    setRectProps({ ...rectProps, [event.target.name]: event.target.value})
    // console.log(rectProps)
    }
    return(
        <div>
            <form className="shapeForms">
                <span className="shapeSpan">
                    <label htmlFor="width">Width: </label>
                    <input
                        type="number"
                        max="18"
                        min="3"
                        name="width"
                        onChange={handleChange}
                        value={rectProps.width}
                    />
                </span>
                <span className="shapeSpan">
                    <label htmlFor="height">Height: </label>
                    <input
                        type="number"
                        max="18"
                        min="2"
                        name="height"
                        onChange={handleChange}
                        value={rectProps.height}
                    />
                </span>
                <span className="shapeSpan">          
                    <label htmlFor="colorFill">Color: </label>
                    <input 
                        type="color" 
                        name="colorFill" 
                        value={rectProps.colorFill}
                        onChange={handleChange}
                    />
                </span>  
            </form>

            <SingleRectangle shapeProperties={rectProps} />

            <button 
                type="button"
                onClick={saveShapes.bind(this, "existingProp", rectProps)}
            >
                Save Shape
            </button>
        </div>
    )
}

export default Rectangle;
