import {useEffect, useState} from "react";
import useInterval from "../hook/useInterval";

export default function Clock()
{
    const [time, setTime] = useState(new Date());
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         console.log("Update Time");
    //         setTime(new Date());
    //     }, 1000)
    //
    //     // Clean Up func is run, when a Component is destroyed
    //     return () => {
    //         console.log('Clean Up Time');
    //         clearInterval(timer)
    //     }
    // }, []);

    useInterval(() => {
        setTime(new Date());
            }, 1000);

    return (<div>

        Time {time.toLocaleTimeString()}

    </div>)
}