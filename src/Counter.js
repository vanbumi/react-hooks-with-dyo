import React, { useState, useEffect } from 'react';

const Counter = () => {
    const initialLocationState = {
        latitude: null,
        longitude: null,
        speed: null
    }

    const [ count, setCount ] = useState(0);
    const [ isOn, setIsOn ] = useState(false);
    const [ mousePosition, setMousePosition ] = useState({ x: null, y: null });
    const [ status, setStatus ] = useState(navigator.onLine);
    const [ location, setLocation ] = useState(initialLocationState);
    let mounted = true;

    useEffect(() => {
        window.document.title = `Kamu sudah klik button ${count} kali`;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline); 
        window.navigator.geolocation.getCurrentPosition(handleGeoLocation);
        const watchId = window.navigator.geolocation.watchPosition(handleGeoLocation);

        // clean up function useEffect
        return () => {
            window.removeEventListener('mousemove', handleMouseMove); 
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline); 
            window.navigator.geolocation.clearWatch(watchId);
            mounted = false;
        }
    }, [count]);

    const handleGeoLocation = event => {
        if (mounted) {
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed 
            });
        }     
    }

    const incrementHandle = () => {
        setCount(prevCount => prevCount + 1)
    } 

    const toggleLigth = () => {
        setIsOn(prevIsOn => !prevIsOn)
    }

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.pageX,
            y: event.pageY
        })
    }

    const handleOnline = () => {
        setStatus(true);
    }

    const handleOffline = () => {
        setStatus(false);
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

                <h2>Mouse Position</h2>
                { JSON.stringify(mousePosition, null, 2) }
                <br/>

                <h2>Network Status</h2>
                <p>You are working <strong> {status ? 'Online' : 'Offline'} </strong> Now</p>

                <h2>Geolocation</h2>
                <p>Latitude is {location.latitude}</p>
                <p>Longitude is {location.longitude}</p>
                <p>Your Speed is {location.speed ? location.speed : "0"}</p>
            </div>
    
    )
}

export default Counter;