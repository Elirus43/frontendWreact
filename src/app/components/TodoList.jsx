import {useState} from "react";

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
    },
    {
        id: 4,
        title: "Task 4"
    }
];

let id = 5;
function getNextId() {
    return id++;
}

export function TodoEntry({onAddTodo}) {
    const [todoText, setTodoText] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            // console.log("Enter key passed", todoText);
            onAddTodo(todoText);
            setTodoText("");
        }
    }
    return (<div>
        <label>Enter new todo: </label>
        <input type={'text'} value={todoText} onChange={(e) => setTodoText(e.target.value)}
               onKeyDown={handleKeyDown} />

    </div>)
}

export function TodoItem({todo, onDeleteTodo, onUpdateTodo}) {
    const [editing, setEditing] = useState(false);
    const [todoText, setTodoText] = useState(todo.title);
    const onDoubleClick = (event) => {
        console.log('Edit Mode On');
            setEditing(true);
        };


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            // console.log("Enter key passed", todoText);
            onUpdateTodo ({
                id: todo.id,
                title: todoText
            })
            // setTodoText("");
            setEditing(false);
        }
    }

    return <div>
        {
            !editing && <span onDoubleClick={onDoubleClick}>
            {todo.title}
            </span>
        }
        {
            editing && <input type={'text'}
                              value={todoText}
                              onChange={(e) => setTodoText(e.target.value)}
                              onKeyDown={handleKeyDown}/>
        }
        &nbsp; &nbsp;
        <button type={'button'} onClick={() => onDeleteTodo(todo)}>
            Delete
        </button>
    </div>;
}

export default function TodoList() {

    const [todos, setTodos] = useState(initialTodos);
    const onAddTodo = (todoTitle) => {
        console.log('Add todo ', todoTitle);
        let id = getNextId();
        const newTodo = {
            id,
            title: todoTitle,
        }
        setTodos([...todos, newTodo]);
    }

    // Communication with Parents
    const onDeleteTodo = (todo) => {
        console.log('Todo ', todo);
        setTodos(todos.filter(td => td.id !== todo.id));
    }
    const onUpdateTodo = (todo) => {
        console.log('Update Todo ', todo);
        setTodos(todos.map(td => td.id === todo.id ? todo:td ));
    }
    return (<div>
        <TodoEntry onAddTodo = {onAddTodo} />
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