import React , {useState} from 'react';
import SingleCircle from './SingleCircle.js';

const shapeProperties = {
    radius: "",
    outlineWidth: "",
    outlineColor: "#C74D4D",
    colorFill: "#2AE530"
}

const activateProps = {
    propertiesPresent: true
}
const Circle = () => {
    const [circleProps, setCircleProps] = useState(shapeProperties)
    const [propStatus, setPropStatus] = useState(activateProps)
    let singleCircle

    if(propStatus.propertiesPresent){
        singleCircle = <SingleCircle shapeProperties={circleProps} />
    }

    const handleChange = event => {
    setCircleProps({ ...circleProps, [event.target.name]: event.target.value})
    console.log(circleProps)
    }


    return(
        <div>
            <form>
                <input 
                    type="text"
                    name="radius"
                    placeholder="Radius in digits"
                    onChange={handleChange}
                    value={shapeProperties.radius}
                    />
                <input 
                    type="text"
                    name="outlineWidth"
                    placeholder="Outline width in digits"
                    onChange={handleChange}
                    value={shapeProperties.outlineWidth}
                />
                <span>
                    <input 
                        type="color" 
                        name="outlineColor" 
                        value={shapeProperties.outlineColor}
                        onChange={handleChange}
                    />
                    <label htmlFor="outlineColor">Outline Color: </label>
                </span>
                <span>
                    <input 
                        type="color" 
                        name="colorFill" 
                        value={shapeProperties.colorFill}
                        onChange={handleChange}
                    />
                    <label htmlFor="colorFill">Fill Color: </label>
                </span>
            </form>
            
            {singleCircle}            
        </div>
    )
}

export default Circle;