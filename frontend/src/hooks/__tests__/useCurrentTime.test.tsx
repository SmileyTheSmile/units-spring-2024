import { renderHook, act } from '@testing-library/react';
import { useCurrentTime } from '../useCurrentTime';

describe('test use current time hook', () => {
    jest.useFakeTimers();
    test('should return the current time', () => {
        const { result } = renderHook(() => useCurrentTime());

        expect(result.current).toBe(new Date().toLocaleTimeString('ru-RU'));

        act(() => {
            jest.advanceTimersByTime(10);
        });

        expect(result.current).toBe(new Date().toLocaleTimeString('ru-RU'));
    });
});