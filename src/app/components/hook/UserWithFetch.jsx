 import useFetch from "./useFetch";

export default function UserWithFetch()
{
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/users');
    return (<div>
        {loading && <h1>Loading...</h1>}

        {error && <p>{error.message}</p>}

        {data.map(user => <div key={user.id}>
            {user.name}
        </div>)}
    </div>)
}