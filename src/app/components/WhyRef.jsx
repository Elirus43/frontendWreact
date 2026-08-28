import {useRef, useState} from "react";

export default function WhyRef() {

    const num = useRef(0);
    console.log('Num ', num);

    const updateNumber = () => {
        num.current++;
    }

    const [counter, setCounter] = useState(0);
    return (<div>
        Counter {counter}
        <button onClick={() => setCounter(counter + 1)}>Inc</button>
        <button onClick={updateNumber}> Num </button>
    </div>)
}