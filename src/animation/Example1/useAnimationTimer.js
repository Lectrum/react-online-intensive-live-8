import { useState, useEffect } from 'react';

export const useAnimationTimer = (duration = 1000, delay = 0) => {
    const [elapsed, setTime] = useState(0);

    useEffect(
        () => {
            let animationFrame, timerStop, start;

            const onFrame = () => {
                setTime(Date.now() - start);
                loop();
            }

            const loop = () => {
                animationFrame = requestAnimationFrame(onFrame);
            }

            const onStart = () => {
                timerStop = setTimeout(() => {
                    cancelAnimationFrame(animationFrame);
                    setTime(Date.now() - start);
                }, duration);

                start = Date.now();
                loop();
            }

            const timerDelay = setTimeout(onStart, delay);

            return () => {
                clearTimeout(timerStop);
                clearTimeout(timerDelay);
                cancelAnimationFrame(animationFrame);
            }

        },
        [duration, delay]
    );

    return elapsed;
}