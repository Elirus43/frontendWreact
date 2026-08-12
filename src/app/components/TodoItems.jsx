'use client';
import {useState} from "react";

const initialTodos = [
    {
        id: 1,
        name: 'Workout'
    },
    {
        id: 2,
        name: 'Take Shower'
    },
    {
        id: 3,
        name: 'Get Dressed'
    },
    {
        id: 4,
        name: 'Start Coding'
    }
];

export default function TodoItems()
{
    const [todos, setTodos] = useState(initialTodos);
    console.log('TodoItems Render');

    const onUpdate = (todo) => {
        console.log('Todo Update ', todo);
        const updateTodo = {
            ...todo,
            name: todo.name + ' Update'
        }
        setTodos(todos.map(td => td.id == todo.id ? updateTodo : td));
    }

    const onDelete = (todo) => {
        console.log('Todo to Delete ',todo);
        setTodos(todos.filter(td => td.id != todo.id));
    }

    return (<div>
        {
            todos.map(todo => <div key = {todo.id}>
                {todo.name}
                &nbsp;
                <button type={'button'} onClick={() => {onUpdate(todo)}}>Update</button>
                &nbsp;
                <button type={'button'} onClick={() => {onDelete(todo)}}>Delete</button>
            </div>)
        }
    </div>)
}