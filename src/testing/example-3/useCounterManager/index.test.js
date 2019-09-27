import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterManager } from './';

describe('CounterManager custom hook', () => {
    test('Initial value should be the same as count value from returned object', () => {
        const source = 0;
        const { result } = renderHook(() => useCounterManager(source));
        expect(result.current.count).toBe(source); 
    });
    test('Increase function should increase value by 1', () => {
        const source = 0;
        const { result } = renderHook(() => useCounterManager(source));
        const prevCount = result.current.count;
        act(() => result.current.increase());
        const incrementedValue = prevCount + 1;
        expect(result.current.count).toBe(incrementedValue);
    });
    test('Decrease function should decrease value by 1', () => {
        const source = 0;
        const { result } = renderHook(() => useCounterManager(source));
        const prevCount = result.current.count;
        act(() => result.current.decrease());
        const decrementedValue = prevCount - 1;
        expect(result.current.count).toBe(decrementedValue);
    });
});