import React from 'react';

const Circle = () => {

    return(
        <div>
            <svg width="20rem" height="20rem" style={{border: "1px solid black", marginTop: "5rem"}}>
                <circle cx="10rem" cy="10rem" r="5rem" stroke="green" strokeWidth="2" fill="yellow" />
            </svg>
            <svg width="20rem" height="20rem" style={{border: "1px solid black", marginTop: "5rem"}}>
                <circle cx="10rem" cy="10rem" r="5rem" stroke="green" strokeWidth="2" fill="yellow" />
            </svg>
        </div>
    )
}

export default Circle;