import React from 'react';

const Rectangle = () => {

    return(
        <div>
            <svg width="20rem" height="20rem" style={{border: "1px solid blue", marginTop: "5rem"}}>
                <circle cx="10rem" cy="10rem" r="5rem" stroke="red" stroke-width="2" fill="green" />
            </svg>
        </div>
    )
}

export default Rectangle;