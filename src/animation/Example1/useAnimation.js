import { useAnimationTimer } from './useAnimationTimer';

const easing = {
    linear: n => n,
    inExpo: n => Math.pow(2, 10 * (n - 1))
};

export const useAnimation = (options) => {
    const {
        easingName = 'linear',
        duration = 500,
        delay = 0
    } = options;

    const elapsed = useAnimationTimer(duration, delay);
    const n = Math.min(1, elapsed / duration);

    return easing[easingName](n);
}