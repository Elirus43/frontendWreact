function TodoItems(props) {
    return <div>
        {props.todo.title}
    </div>;
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
    return (<div>
        {
            todos.map(todo => <TodoItems
                key={todo.id}
                todo={todo}/>
            )}
    </div>
    );
}