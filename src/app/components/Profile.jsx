export default function Profile({name, avatar})
{
    // const avatar = 'https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg';
    // const name = 'Spiderman';
    const person = {
        name: 'Johnson',
        theme: {
            backgroundColor: 'black',
            color: 'pink',
            border: '3px solid lightgray'
        }
    }
    let style = {
        backgroundColor: 'black',
        color: 'pink',
        border: '3px solid lightgray',
    }
    return (<div style={style}>
        <h3>{name}</h3>
        <img src={avatar} alt="Profile" width='500px' height='300px' />
    </div>)
}