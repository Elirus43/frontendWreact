'use client';
import {useState} from "react";
export default function Counter() {

    console.log('Render Counter');
    const [counter, setCounter] = useState(0);
    const [another, setAnother] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }
    return (<div>
        <button onClick={decrement}>-</button>
        <h3>
            {
                counter
            }
        </h3>
        <button onClick={increment}>+</button>
        <h3>Another {another}</h3>
        <button onClick={() => setAnother(another + 1)}>Inc Another</button>
    </div>)
}