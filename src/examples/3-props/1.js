// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component {
    render() {
        return <h1>{this.props.message}</h1>;
    }
}

const Parent = () => {
    const text = 'hello';

    return <Child message = { text } />;
};

render(<Parent />, document.getElementById('root'));
