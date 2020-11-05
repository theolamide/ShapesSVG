import React from 'react';

const SingleRectangle = (props) => {
    let intWidth = props.shapeProperties.width
    let intHeight = props.shapeProperties.height
    let width = intWidth;
    let height = intHeight;
    let svgWidth = 20
    let svgHeight = 20
    let xCenter = ((svgWidth-intWidth)/2).toString()
    let yCenter = ((svgHeight-intHeight)/2).toString()
    return(
        <div className="singleShapeRoot">
            <svg 
                width="20rem" 
                height="20rem"
                // style={{margin: "2.5rem"}}
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