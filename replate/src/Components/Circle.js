import React , {useState} from 'react';
import SingleCircle from './SIngleCircle.js';

const Circle = () => {

    const [circleProps, setCircleProps] = useState()
    return(
        <div>
            <SingleCircle />
        </div>
    )
}

export default Circle;