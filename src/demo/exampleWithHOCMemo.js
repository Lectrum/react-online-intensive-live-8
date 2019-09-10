import React, { useState, useEffect, useMemo, memo } from 'react';
import { render } from 'react-dom';

const DefaultChild = ({ title }) => {
    console.log('default child', title);

    return (
        <span>Hi</span>
    );
};

const Child = memo(({ title }) => {
    console.log('Improved child', title);

    return (
        <span>Hi</span>
    );
}, (prevProps, nextProps) => {
    return prevProps.time === nextProps.time
})

const Parent = () => {
    console.log('parent');
    
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    const [val, setVal] = useState(0);

    return (
        <>
            <Child title={ val } />
            <p onClick={ () => setA(a + 1) }>A { a }</p>
            <p onClick={ () => setB(b + 1) }>B { b }</p>
        </>
    )
};

render(<Parent />, document.getElementById('root'));
