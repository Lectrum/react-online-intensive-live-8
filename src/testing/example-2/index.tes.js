import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Counter } from './index';

Enzyme.configure({ adapter: new Adapter() });

const init = (source) => {
    const container = shallow(<Counter source={source} />);
    const increment = container.find('#increment');
    const decrement = container.find('#decrement');

    return {
        container,
        increment,
        decrement
    }
}

describe('Counter component', () => {
    test('Counter should render without crashing', () => {
        const div = document.createElement('div');
        render(<Counter source={0} />, div);
        unmountComponentAtNode(div);
    });
    test('Initial value should be received from property source', () => {
        const source = 0;
        const { container } = init(source);
        const counter = container.find('p');
        const receivedValue = Number(counter.text());
        expect(receivedValue).toBe(source);
    });
    test('Increase function should increase value by 1', () => {
        const source = 0;
        const { container, increment } = init(source);
        const counter = container.find('p');
        const prevValue = Number(counter.text());
        increment.props().onClick();
        const updatedCounter = container.find('p');
        const receivedValue = Number(updatedCounter.text());
        const incrementedValue = prevValue + 1;
        expect(receivedValue).toBe(incrementedValue);
    });
    test('Decrease function should increase value by 1', () => {
        const source = 0;
        const { container, decrement } = init(source);
        const counter = container.find('p');
        const prevValue = Number(counter.text());
        decrement.props().onClick();
        const updatedCounter = container.find('p');
        const receivedValue = Number(updatedCounter.text());
        const decrementedValue = prevValue - 1;
        expect(receivedValue).toBe(decrementedValue);
    });
});