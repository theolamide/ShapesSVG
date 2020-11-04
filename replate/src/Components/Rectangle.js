import React, {useState} from 'react';
import SingleRectangle from './SingleRectangle.js';


const shapeProperties = {
    width: "",
    height: "",
    colorFill: ""
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
