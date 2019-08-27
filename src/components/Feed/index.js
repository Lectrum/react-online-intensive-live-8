// Core
import React, { Component, useState } from 'react';

// Components
import * as Components from '../';

// Instruments
import Styles from './styles.module.css';

export const Feed = () => {
    const [posts, setPosts] = useState([
        {
            id: '123',
            comment: 'Hi there',
            created: 1566922073104
        },
        {
            id: '456',
            comment: 'Hello',
            created: 1566921073104
        }
    ]);

    const postsJSX = posts.map((post) => {
        return <Components.Post key = { post.id } {...post} />;
    });

    return (
        <section className={ Styles.feed }>
            <Components.StatusBar/>
            <Components.Composer/>
            {postsJSX}
        </section>
    );
};
