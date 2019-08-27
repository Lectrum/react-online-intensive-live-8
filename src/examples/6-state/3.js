// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    _transform = () => {
        this.setState(
            {
                name: 'Gendalf the White',
                age:  6001,
            },
            () => {
                console.log('→ The state was updated.');
            },
        );
    };

    render() {
        const { name, age } = this.state;

        console.log('→ render');

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <button onClick = { this._transform }>Transform</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('root'));
