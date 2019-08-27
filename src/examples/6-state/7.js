// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    _grow = () => {
        // setImmediate(() => {
        this.setState((prevState) => ({ age: prevState.age + 1 }));
        this.setState((prevState) => ({ age: prevState.age + 1 }));
        this.setState((prevState) => ({ age: prevState.age + 1 }));
        this.setState((prevState) => ({ age: prevState.age + 1 }));
        this.setState((prevState) => ({ age: prevState.age + 1 }));
        // });
    };

    renders = 0;

    render() {
        const { name, age } = this.state;

        this.renders += 1;
        console.log('→ renders:', this.renders);

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <button onClick = { this._grow }>Grow!</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('root'));
