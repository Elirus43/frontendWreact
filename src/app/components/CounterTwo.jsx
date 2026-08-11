'use client';
import {useState} from "react";

export default function CounterTwo()
{
    const [number, setNumber] = useState(0);

    const incNum = () => {
     setNumber(number + 1);
     setNumber(number + 1);
     setNumber(number + 1);
    }
    return (<div>
        <h1>{number}</h1>
        <button onClick={incNum}>Click</button>
    </div>)
}