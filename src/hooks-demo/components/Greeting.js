import React, { useContext } from 'react';
import { Row } from './Row';
import { useFormInput, useDocumentTitle, useWindowWidth } from '../hooks';
import { ThemeContext, LocaleContext } from './context';

export const Greeting = () => {
    const name = useFormInput('Mary');
    const surname = useFormInput('Poppins');
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);
    const title = 'React Hooks Demo';
    const width = useWindowWidth();
    useDocumentTitle(`${name.value} ${surname.value} - ${title}`);

    return (
        <section className={theme}>
            <Row label="Name">
                <input {...name}/>
            </Row>
            <Row label="Surname">
                <input {...surname}/>
            </Row>
            <Row label="Language">
                {locale}
            </Row>
            <Row label="Width">
                {width}
            </Row>
        </section>
    )
}