import './counter.css';
import {useState} from "react";

function Counter({person}) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover)
    {
        className += ' hover';
    }

    return (
        <div className = {className}
             onPointerEnter = {() => setHover(true)}
             onPointerLeave = {() => setHover(false)}
             >
            <h1>{person}'s score: {score}</h1>
            <button onClick = {() => setScore(score + 1)}>
                Add One
            </button>
        </div>
    );
}
export default function SamePosition()
{
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div>
            {isPlayerA ? (
                <Counter person = "Itachi" />
            ): (
                <Counter person = "Sasuke" />
            )}
            <button onClick = {() => {setIsPlayerA(!isPlayerA)}}>
                Next Player
            </button>
        </div>
    )
}