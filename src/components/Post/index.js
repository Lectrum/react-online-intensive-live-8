// Core
import React, { useContext } from 'react';
import moment from 'moment';

// Components
import { Context } from '../../components';

// Instruments
import Styles from './styles.module.css';

export const Post = ({ comment, created }) => {
    const context = useContext(Context);

    return (
        <section className={Styles.post}>
            <img src={ context.avatar }/>
            <a>{ context.currentUserFirstName } { context.currentUserLastName }</a>
            <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
            <p>{comment}</p>
        </section>
    );
};
