import React from 'react';

const SingleCircle = (props) => {

    const radius = props.shapeProperties.radius.toString();
    return(
        <div>
            <svg 
                width="20rem" 
                height="20rem" 
                style={{border: "1px solid black", marginTop: "5rem"}}
            >
                <circle 
                    cx="10rem" 
                    cy="10rem" 
                    r={radius + "rem"}
                    stroke={props.shapeProperties.outlineColor} 
                    fill={props.shapeProperties.colorFill} 
                />
            </svg>
            

        </div>        
    )
}

export default SingleCircle;