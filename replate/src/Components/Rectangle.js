import React from 'react';

const Rectangle = () => {

    return(
        <div>
            <svg width="20rem" height="20rem" style={{border: "1px solid blue", marginTop: "5rem"}}>
                <rect x="2.5rem" y="7.5rem" width="15rem" height="5rem" stroke="red" strokeWidth="0.1rem" fill="green" />
            </svg>
        </div>
    )
}

export default Rectangle;