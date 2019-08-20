// Core
import React from 'react';

// Context
import { Consumer } from './context';

const Page = () => {
    return (
        <Consumer>
            {(contextData) => {
                return (
                    <>
                        <h1>{contextData.title}</h1>
                        <ul>
                            <li>
                                Page: <code>{contextData.page}</code>
                            </li>
                        </ul>
                    </>
                );
            }}
        </Consumer>
    );
};

const Book = () => {
    return <Page />;
};

const Bookshelf = () => {
    return <Book />;
};

const Room = () => {
    return <Bookshelf />;
};

export const Library = () => {
    return <Room />;
};
