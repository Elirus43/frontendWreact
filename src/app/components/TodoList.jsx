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

function TodoEntry({onAddTodo}) {
    const [todoText, setTodoText] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            // console.log("Enter key passed", todoText);
            onAddTodo(todoText);
            setTodoText("");
        }
    }
    return (<div>
        <input type={'text'} value={todoText} onChange={(e) => setTodoText(e.target.value)}
               onKeyDown={handleKeyDown} />

    </div>)
}

function TodoItem({todo, onDeleteTodo}) {
    return <div>
        {todo.title}
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
    const onDeleteTodo = (todo) => {
        console.log('Todo ', todo);
        setTodos(todos.filter(td => td.id !== todo.id));
    }
    return (<div>
        <TodoEntry onAddTodo = {onAddTodo} />
        {
            todos.map(todo => <TodoItem
                key={todo.id}
                todo={todo}
                onDeleteTodo={onDeleteTodo}
            />)
        }
    </div>)
}