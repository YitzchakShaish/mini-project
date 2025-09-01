import React, { useRef, useState, useEffect } from 'react';

export default function Stoper() {
    const idRef = useRef(0);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return; 

        idRef.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

      
        return () => {
            clearInterval(idRef.current);
            idRef.current = 0;
            setSeconds(0);
            console.log('stoper stopped');
        };
    }, [running]); 

    return (
        <>
            <h1>Stoper: {seconds}</h1>
            <input type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
            />
            <button onClick={() => setRunning(true)}>Start Stoper</button>
            <button onClick={() => setRunning(false)}>Stop Stoper</button>
        </>
    );
}
