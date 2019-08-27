// Core
import React, { useState } from 'react';

// Components
import * as Components from '../';

// Instruments
import Styles from './styles.module.css';

export const Feed = function() {
    if(true) {
        const [posts, setPosts] = useState([
            {
                id: 'a',
                comment: 'Hi there',
                created: 1566922073104
            },
            {
                id: 'b',
                comment: 'Hello',
                created: 1566921073104
            },
            {
                id: 'c',
                comment: 'Hi',
                created: 1566921073104
            },
        ]);
    }

    // const postsJSX = posts.map((post) => {
    //     return <Components.Post key = { post.id } {...post} />;
    // });

    // const [counter, setCounter] = useState(0);

    // const update = () => {
    //     setCounter(counter + 1);
    // };

    return (
        // <section className={ Styles.feed }>
        //     <Components.StatusBar/>
        //     <Components.Composer/>
        //     {postsJSX}
        //     <h1>{counter}</h1>
        //     <button onClick={update}/>  
        // </section>
        <h1>Some text</h1>
    );
};
