import React, {useState} from 'react';
import SingleRectangle from './SingleRectangle.js';


const shapeProperties = {
    width: "3",
    height: "2",
    colorFill: "#C5302B"
}

const activateProps = {
    propertiesPresent: true
}

const Rectangle = ({saveShapes}) => {

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
                    min="3"
                    name="width"
                    placeholder="Width"
                    onChange={handleChange}
                    value={rectProps.width}
                />
                <input
                    type="number"
                    max="9"
                    min="2"
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
