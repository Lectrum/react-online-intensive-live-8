import React, { useState } from 'react';
import { render } from 'react-dom';

const useReducer = (initialState, reducer) => {
    const [state, setState] = useState(initialState);

    const dispatch = (action) => {
        const nextState = reducer(state, action);
        setState(nextState);
    };

    return [state, dispatch];
}

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            throw new Error(`We don't have this action: ${ action.type }`);
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(initialState, reducer);

    return (
        <>
            <p>Count: { state.count }</p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
};

render(<Counter />, document.getElementById('root'));
