import React, {useState} from 'react';
import SingleRectangle from './SingleRectangle.js';


const shapeProperties = {
    width: "",
    height: "",
    outlineWidth: "",
    outlineColor: "#C74D4D",
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
    console.log(rectProps)
    }
    return(
        <div>
            Rectangle
        </div>
    )
}

export default Rectangle;