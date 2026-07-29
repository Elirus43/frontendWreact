export default function Greeting({message}) {
    console.log('Greeting Props ', message);
    return (<div>
        <h3>{message}</h3> {}
    </div>)
}