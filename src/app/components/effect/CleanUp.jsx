import {useState} from "react";
import Clock from "./Clock";

export default function CleanUp() {
    const [showB, setShowB] = useState(true);
    return (<div>

        {showB && <Clock/>}
        <label>

            <input type={'checkbox'} checked={showB} onChange={e => {setShowB(e.target.checked)}}/>
            Close Clock

        </label>

    </div>)
}