import React, { useState } from 'react';

const Counter = () => {

    const [ count, setCount ] = useState(0);

    const incrementHandle = () => {
        setCount(prevCount => prevCount + 1)
    } 

    return (
        <div>
            <h3>Button Count has click { count } times</h3>
            <button onClick={incrementHandle}>Click Me</button>
        </div>
    )
}

export default Counter;