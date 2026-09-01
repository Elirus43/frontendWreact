import {useState} from "react";

export default function useCustomReducer(reducerFn, initState) {
    const [state, setState] =useState(initState)

    function dispatchFn (action) {
        const newState = reducerFn(state, action)
        setState(newState)
    }
    return [state, dispatchFn]
}