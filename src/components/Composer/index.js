// Core
import React, { useContext } from 'react';

// Components
import { Context } from '../../components';

// Instruments
import Styles from './styles.module.css';

export const Composer = () => {
    const context = useContext(Context);

    return (
        <section className={Styles.composer}>
            <img src={ context.avatar } alt = ''/>
            <form>
                <textarea placeholder={`What's on your mind, ${
                    context.currentUserFirstName
                }?`}/>
                <input
                    type='submit'
                    value='Post'
                />
            </form>
        </section>
    );
};
