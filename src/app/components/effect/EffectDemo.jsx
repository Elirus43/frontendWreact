import {useEffect, useState} from "react";

export default function EffectDemo()
{
    console.log("Effect demo render");
    const [counter, setCounter] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    useEffect(() => {
        console.log('Use Effect run Once')
    }, []) // To run once, we add dependency which is empty array
    // Run with order
    useEffect(() => {
        console.log("Effect 1");
    }, [counter]);
    useEffect(() => {
        console.log("Effect 2");
    });
    useEffect(() => {
        console.log("Effect 3");
    });
    return (<div>
        Effect Demo {counter}
        <button type={'button'} onClick={() => setCounter(counter + 1)}>  + </button>

        <div>
            Counter Two {counterTwo}
            <button type={'button'} onClick={() => setCounterTwo(counterTwo + 1)}> Inc </button>
        </div>
    </div>)
}