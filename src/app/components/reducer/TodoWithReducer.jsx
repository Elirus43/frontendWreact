import {useReducer, useState} from "react";
import {TodoEntry} from "@/app/components/TodoList";
import {todoReducer} from "./todoReducer";
import {TodoItem} from "@/app/components/TodoList";
import useCustomReducer from "../hook/useCustomReducer";

const initialTodos = [
    {
        id: 1,
        title: "Task 1"
    },
    {
        id: 2,
        title: "Task 2"
    },
    {
        id: 3,
        title: "Task 3"
    }
];

let id = 5;
function getNextId() {
    return id++;
}

const onAddTodo = (title) => {
    console.log('OnAddTodo ', title);
}

export default function TodoWithReducer() {
    // const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [todos, dispatch] = useCustomReducer(todoReducer, initialTodos);
    const onAddTodo = (title) => {
        console.log('Add todo ', title);
        let id = getNextId();
        const newTodo = {
            id,
            title,
        };
        dispatch({
            type: 'ADD_TODO',
            payload: newTodo
        })
    }

    // Communication with Parents
    const onDeleteTodo = (todo) => {
        console.log('Todo ', todo);
        dispatch({
            type: 'DELETE_TODO',
            payload: todo
        })
    }
    const onUpdateTodo = (todo) => {
        console.log('Update Todo ', todo);
        dispatch({
            type: 'UPDATE_TODO',
            payload: todo
        })
    }
    return (<div>
        <TodoEntry onAddTodo={onAddTodo}/>
        {
            todos.map(todo => <TodoItem
                key={todo.id}
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
            />)
        }
    </div>)
}