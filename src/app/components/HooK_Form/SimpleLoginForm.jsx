import {useState} from "react";

export default function SimpleLoginForm ()
{
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log("State ", state);
        e.preventDefault();
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                &nbsp;
                <input type={'text'} value={state.username} name={"username"} onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                &nbsp;
                <input type={'text'} value={state.password} name={"password"} onChange={handleChange} />
            </div>
            <div>
                <label></label>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    </div>)
}