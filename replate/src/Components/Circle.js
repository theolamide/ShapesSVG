import React , {useState} from 'react';
import SingleCircle from './SingleCircle.js';

const shapeProperties = {
    radius: "",
    colorFill: ""
}

const activateProps = {
    propertiesPresent: true
}
const Circle = ({saveShapes}) => {
    const [circleProps, setCircleProps] = useState(shapeProperties)
    const [propStatus, setPropStatus] = useState(activateProps)
    let singleCircle

    if(propStatus.propertiesPresent){
        singleCircle = <SingleCircle shapeProperties={circleProps} />
    }

    const handleChange = event => {
    setCircleProps({ ...circleProps, [event.target.name]: event.target.value})
    // console.log(circleProps)
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
            <button 
                type="button"
                onClick={saveShapes.bind(this, "existingProp", circleProps)}
            >
                Save Shape
            </button>
        </div>
    )
}

export default Circle;