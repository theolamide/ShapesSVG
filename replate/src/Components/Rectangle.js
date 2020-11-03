import React, {useState} from 'react';
import SingleRectangle from './SingleRectangle.js';


const shapeProperties = {
    width: "",
    height: "",
    colorFill: "#2AE530"
}

const activateProps = {
    propertiesPresent: true
}

const Rectangle = () => {

    const [rectProps, setRectProps] = useState(shapeProperties)
    const [propStatus, setPropStatus] = useState(activateProps)
    let singleRectangle

    if(propStatus.propertiesPresent){
        singleRectangle = <SingleRectangle shapeProperties={rectProps} />
    }

    const handleChange = event => {
    setRectProps({ ...rectProps, [event.target.name]: event.target.value})
    // console.log(rectProps)
    }
    return(
        <div>
            <form className="Forms">
                <input
                    type="number"
                    max="18"
                    min="4"
                    name="width"
                    placeholder="Width"
                    onChange={handleChange}
                    value={rectProps.width}
                />
                <input
                    type="number"
                    max="9"
                    min="4"
                    name="height"
                    placeholder="height"
                    onChange={handleChange}
                    value={rectProps.height}
                />                
                <label htmlFor="colorFill">Color: </label>
                <input 
                    type="color" 
                    name="colorFill" 
                    value={rectProps.colorFill}
                    onChange={handleChange}
                />
            </form>
            {singleRectangle}
        </div>
    )
}

export default Rectangle;

{/* <input 
                    type="number"
                    max = "2"
                    min = "0"
                    name="outlineWidth"
                    placeholder="Outline width in digits"
                    onChange={handleChange}
                    value={rectProps.outlineWidth}
                /> */}
                {/* <label htmlFor="outlineColor">Outline Color: </label>
                <input 
                    type="color" 
                    name="outlineColor" 
                    value={rectProps.outlineColor}
                    onChange={handleChange}
                /> */}