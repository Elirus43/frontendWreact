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
let id = 4;

function getNextId ()
{
    return id++;
}
export default function TodoItems()
{
    console.log('TodoItems Render');
    const [todos, setTodos] = useState(initialTodos);

    const [todoTitle, setTodoTitle] = useState('');
    console.log('Todo Title ', todoTitle);

    const onTitleChange = (event) => {
        setTodoTitle(event.target.value);
    }

    const onUpdate = (todo) => {
        console.log('Todo Update ', todo);
        const updateTodo = {
            ...todo,
            name: todo.name + ' Update'
        }
        setTodos(todos.map(td => td.id === todo.id ? updateTodo : td));
    }

    const onDelete = (todo) => {
        console.log('Todo to Delete ',todo);
        setTodos(todos.filter(td => td.id !== todo.id));    /* Core Logic Here */
    }

    const onCreate = () => {
        let id = getNextId();
        let newTodo = {
            id,
            name: todoTitle
        }
        setTodoTitle('')
        setTodos([...todos, newTodo]);
    }
    return (<div>
        <input type="text" onChange={onTitleChange} value={todoTitle}  />

        <button type={'button'} onClick={() => onCreate()}>Add</button>
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