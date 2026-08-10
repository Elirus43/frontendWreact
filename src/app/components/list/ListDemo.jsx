'use client';

function TodoItem({todo}) {
    const onClickHandler = (e) => {
        console.log('Clicked ', e);
        console.log('Todo ', todo);
    }

    return <div>
        {todo.title}
        <button onClick={onClickHandler} type="button">Edit</button>
    </div>
}

export default function ListDemo()
{
    const todos = [
        {
            id : 1,
            title : "Wake up at 8am"
        },
        {
            id : 2,
            title : "Have breakfast at 9am"
        },
        {
            id : 3,
            title : "Study at 10am"
        },
    ];
    console.log('Todo ', TodoItem({todo:{id:3, title:"Wake up at 8am"}}));
    return (<div>
        {
            todos.map(todo => <TodoItem
                key={todo.id}
                todo={todo}/>
            )}
    </div>
    );
}