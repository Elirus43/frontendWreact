import {useEffect, useState} from "react";

export default function TodoWithFetch()
{
    const [todos, setTodos] = useState([]);
    console.log('Render');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
        .then(data => setTodos(data))
    }, [])  // Prevent render again & again with dependency
    return (<div>
        {todos.map(td => <div key={td.id}>
            {td.title}
        </div>)}
    </div>)
}