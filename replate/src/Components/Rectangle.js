import React, {useState} from 'react';
import SingleRectangle from './SingleRectangle.js';


const shapeProperties = {    
    width: "3",
    height: "2",
    shapeType: "rectangle",
    colorFill: "#C5302B"
}
const Rectangle = ({saveShapes, executeScroll}) => {

    const [rectProps, setRectProps] = useState(shapeProperties)

    const handleChange = event => {

        let heightToCheck
        let widthToCheck 

        if (event.target.name === "height"){
            heightToCheck = event.target.value
        }
        if (event.target.name === "width"){
            widthToCheck = event.target.value
        }

        if (heightToCheck > 18 || heightToCheck < 0 || widthToCheck > 18 || widthToCheck < 0){
            alert("Maximum and Minimum height are 18 and 1 respectively while Maximum and Minimum width are 18 and 1 respectively")
        } else {
            setRectProps({ ...rectProps, [event.target.name]: event.target.value})
        }
    }

    const saveShapeAction = () => {
        saveShapes.bind(this, "existingProp", rectProps)()
        executeScroll()
    }

    const reset = () => {
        setRectProps(shapeProperties)
    }

    return(
        <div className="toRender">
            <form className="shapeForms">
                <span className="shapeSpan">
                    <label htmlFor="width">Width: </label>
                    <input
                        type="number"
                        max="18"
                        min="1"
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
                        min="1"
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

            <span className="saveAndResetSpan">            
                <button
                    type="button"
                    className="saveShapeButton"
                    onClick={reset}
                >
                    Reset
                </button>
                <button 
                    type="button"
                    className="saveShapeButton"
                    onClick={saveShapeAction}
                >
                    Save Shape
                </button>
            </span> 
        </div>
    )
}

export default Rectangle;
