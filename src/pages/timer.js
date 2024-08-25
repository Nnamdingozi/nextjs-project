import React from "react";
import { useEffect, useState } from "react";


function Timer() {
    const [name, setName] = useState("");
    const [time, seTime] = useState(0);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            seTime(prev => prev + 1)
        },
            1000)
        return () => { clearInterval(timeInterval) }
    },

        []);

    function handleChange({ target }) {
        setName(target.value);
        
       
    }

        
    
    return (
        <>
            <h1>Time: {time}</h1>
            <button onClick={() => seTime(0)}>Clear</button> <br /> <br />
            <label>
        
                <input
                    onChange={handleChange}
                    value={name}
                    type="text"
                    placeholder="Type your name"
                />
                {name?  <p> Thank You {name}</p>: ""}
            </label>

        </>
    )
}
export default Timer;