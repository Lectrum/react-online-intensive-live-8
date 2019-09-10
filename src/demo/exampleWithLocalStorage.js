import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useLocalStorage } from './useLocalStorage';

const Component = () => {
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                value={ name }
                onChange={ e => setName(e.target.value) }
            />
        </>
    )
};

render(<Component />, document.getElementById('root'));
