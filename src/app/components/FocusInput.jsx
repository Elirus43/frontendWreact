import {useRef} from "react";

export default function FocusInput()
{
    const inputRef = useRef(null);
    const focus = () => {
        console.log('Focus ', inputRef);
        inputRef.current.focus();
    }
    return (<div>
        <input type={'text'} ref={inputRef}/>
        <button type={'button'} onClick={focus}>Click</button>
    </div>)
}