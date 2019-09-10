import React, { useState, useCallback } from 'react';
import { useTransition, animated as a } from 'react-spring';

import './styles.css';

const pages = [
    ({ style }) => <a.div style={{ ...style, backgroundImage: `url('https://images.pexels.com/photos/2602543/pexels-photo-2602543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')` }} />,
    ({ style }) => <a.div style={{ ...style, backgroundImage: `url('https://images.pexels.com/photos/2177700/pexels-photo-2177700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')` }} />,
    ({ style }) => <a.div style={{ ...style, backgroundImage: `url('https://images.pexels.com/photos/2871860/pexels-photo-2871860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')` }} />
]

export const Example3 = () => {
    const [index, set] = useState(0);
    const onClick = useCallback(() => set(index => (index + 1) % 3), []);
    const transitions = useTransition(index, p => p, {
        from: {transform: 'translate3d(100%, 0, 0)'},
        enter: {transform: 'translate3d(0%, 0, 0)'},
        leave: {transform: 'translate3d(-50%, 0, 0)'},
    })

    console.log(transitions);


    return (
        <div onClick={onClick} className="simple-trans-main">
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item];
                return <Page key={key} style={props} />
            })}
        </div>
    );
}