import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: "increment",payload:8 });
    };

    const decrement = () => {
        dispatch({ type: "decrement" });
    };

    const reset = () => {
        dispatch({ type: "reset" });
    };

    return (
        <div>
            Use Reducer count: {state.count}
            <br /><br />
            <button onClick={increment}>Increment</button>
            <br /><br />
            <button onClick={decrement}>Decrement</button>
            <br /><br />
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default UseReducer;
