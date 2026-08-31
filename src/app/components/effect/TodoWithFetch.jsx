import useFetch from "../hook/useFetch";

export default function TodoWithFetch()
{
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');
    return (<div>

        {loading && <h1>Loading...</h1>}
        <h2>Todos</h2>
        {error && <p>{error.message}</p>}

        {data.map(td => <div key={td.id}>
            {td.title}
        </div>)}
    </div>)
}