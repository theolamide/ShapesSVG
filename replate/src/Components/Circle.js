import React , {useState} from 'react';
import SingleCircle from './SingleCircle.js';

const shapeProperties = {
    radius: "",
    colorFill: ""
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
            <form className="Forms">
                <input 
                    type="number"
                    max = "10"
                    min = "2"
                    name="radius"
                    placeholder="Radius"
                    onChange={handleChange}
                    value={circleProps.radius}
                />
                <label htmlFor="colorFill">Color: </label>
                <input 
                    type="color" 
                    name="colorFill" 
                    value={circleProps.colorFill}
                    onChange={handleChange}
                />
            </form>
            
            {singleCircle}            
        </div>
    )
}

export default Circle;

// const shapeProperties = {
//     radius: "3",
//     outlineWidth: "1",
//     outlineColor: "#C74D4D",
//     colorFill: "#2AE530"
// }

{/* <input 
                    type="number"
                    max = "2"
                    min = "0"
                    name="outlineWidth"
                    placeholder="Outline width in digits"
                    onChange={handleChange}
                    value={circleProps.outlineWidth}
                />
                <label htmlFor="outlineColor">Outline Color: </label>
                <input 
                    type="color" 
                    name="outlineColor" 
                    value={circleProps.outlineColor}
                    onChange={handleChange}
                /> */}