import React from 'react';
import { useAnimation } from './useAnimation';

const Header = ({ animationStyles, content }) => {
    return <h1 style={animationStyles}>{content}</h1>
}

export const Example1 = () => {
    const animationValue = useAnimation('elastic', 600, 0);
    
    const animationStyles = {
        marginLeft: animationValue * 100
    };

    return (
        <Header content='Hello' animationStyles={animationStyles} />
    );
}