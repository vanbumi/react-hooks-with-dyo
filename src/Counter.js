import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [ count, setCount ] = useState(0);
    const [ isOn, setIsOn ] = useState(false);

    useEffect(() => {
        window.document.title = `Kamu sudah klik button ${count} kali`
    },);

    const incrementHandle = () => {
        setCount(prevCount => prevCount + 1)
    } 

    const toggleLigth = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    return (
            <div>
                <h2>Counter</h2>
                <h3>Button Count has click { count } times</h3>
                <button onClick={incrementHandle}>Click Me</button>
         
                <h2>Toggle Ligth</h2>
                {/* <div
                    style={{
                        height: '50px',
                        width: '50px',
                        backgroundColor: isOn ? 'yellow' : 'grey'
                    }}
                    onClick={toggleLigth}
                >
                </div> */}
                <img 
                    src={ isOn 
                        ? "https://icon.now.sh/highlight/fd0" 
                        : "https://icon.now.sh/highlight/aaa"
                    }
                    style={{
                        height: '50px',
                        width: '50px',
                    }}  
                    alt='flash-light'
                    onClick={toggleLigth}          
                />           
            </div>
    
    )
}

export default Counter;