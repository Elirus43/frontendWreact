function Row({name, age}) {
    return (
        <>
            <td>{name}</td>
            <td>{age}</td>
        </>
    )
}


export default function FragmentDemo()
{
    const items = [
        {
            name: "Elirus",
            age: 23
        },
        {
            name: "Neko",
            age: 3
        }
    ]
    return (<div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {
                items.map((item, index) => <tr key={index}>
                <Row name={item.name} age={item.age} />
                </tr>)
            }
            </tbody>
        </table>
    </div>)
}