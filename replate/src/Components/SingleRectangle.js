import React from 'react';

const SingleRectangle = (props) => {
    let intWidth = props.shapeProperties.width
    let intHeight = props.shapeProperties.height
    let width = intWidth.toString();
    let height = intHeight.toString();
    let xCenter = ((20-intWidth)/2).toString()
    let yCenter = ((20-intHeight)/2).toString()
    return(
        <div>
            <svg 
                width="20rem" 
                height="20rem" 
                style={{marginTop: "5rem"}}
            >
                <rect 
                    x= {xCenter + "rem"}
                    y= {yCenter + "rem"}
                    width={width + "rem"}
                    height={height + "rem"}
                    fill={props.shapeProperties.colorFill} 
                />
            </svg>
        </div>
    )
}

export default SingleRectangle;