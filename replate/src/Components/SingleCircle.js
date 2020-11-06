import React from 'react';

const SingleCircle = (props) => {

    const radius = props.shapeProperties.radius.toString();
    let svgWidth = 20
    let svgHeight = 20
    let xCenter = (svgWidth/2).toString()
    let yCenter = (svgHeight/2).toString()
    return(
        <div className="singleShapeRoot">
            <svg 
                width="20rem" 
                height="20rem"
            >
                <circle 
                    cx={xCenter + "rem"}
                    cy={yCenter + "rem"} 
                    r={radius + "rem"}
                    stroke={props.shapeProperties.outlineColor} 
                    fill={props.shapeProperties.colorFill} 
                />
            </svg>
            

        </div>        
    )
}

export default SingleCircle;
