import { useReducer } from 'react';

export function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            }
            case 'DECREMENT':
                return {
                    count: state.count - 1,
                }
                default: return state;
    }
}
let initialState = {
    count: 0,
}
export default function CounterWithReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const decrement = () => {
        dispatch({
            type: 'DECREMENT',
        })
    }
    const increment = () => {
        dispatch({
            type: 'INCREMENT',
        })
    }
    return (<div>
        <button type={'button'} onClick={decrement}>
            -
        </button>
        {state.count}
        <button type={'button'} onClick={increment}>
            +
        </button>
    </div>)
}