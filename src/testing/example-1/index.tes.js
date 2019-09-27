import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { Counter } from './index';

const init = (source) => {
    const { container } = render(<Counter source={source} />);
    const counter = getByTestId(container, 'counterValue');
    const increment = getByTestId(container, 'increment');
    const decrement = getByTestId(container, 'decrement');

    return {
        counter,
        increment,
        decrement
    }
}

// describe('Counter component', () => {
//     test('Initial value should be received from property source', () => {
//         const source = 0;
//         const { counter } = init(source);
//         const value = Number(counter.textContent);
//         expect(value).toBe(source);
//     });
//     test('Increase function should increase value by 1', () => {
//         const source = 0;
//         const { counter, increment } = init(source);
//         const prevCounter = Number(counter.textContent);
//         fireEvent.click(increment);
//         const currentCounter = Number(counter.textContent);
//         const incrementedValue = prevCounter + 1;
//         expect(currentCounter).toBe(incrementedValue);
//     });
//     test('Decrease function should increase value by 1', () => {
//         const source = 0;
//         const { counter, decrement } = init(source);
//         const prevCounter = Number(counter.textContent);
//         fireEvent.click(decrement);
//         const currentCounter = Number(counter.textContent);
//         const decrementedValue = prevCounter - 1;
//         expect(currentCounter).toBe(decrementedValue);
//     });
// });