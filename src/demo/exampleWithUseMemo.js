import React, { useState, useEffect, useMemo } from 'react';
import { render } from 'react-dom';

const calculate = (a, b) => {
    console.log('calculate');

    return a + b;
}

const Component = () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    const [counter, setCounter] = useState(0);

    const sum = useMemo(() => calculate(a, b), [a, b]);

    return (
        <>
            <h1 onClick={ () => setCounter(counter + 1) }>Counter { counter }</h1>
            <p>Sum { sum }</p>
            <p onClick={ () => setA(a + 1) }>A { a }</p>
            <p onClick={ () => setB(b + 1) }>B { b }</p>
        </>
    )
};

render(<Component />, document.getElementById('root'));
