// Core
import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { history } from './history';

const Home = () => (
    <>
        <h1>Home</h1>
        <Link to = '/profile'>Profile</Link>
    </>
);

const Profile = (props) => {
    const name = props.match.params.name;

    if (name !== 'neo') {
        history.push('/');
    }

    return (
        <>
            <h1>Profile { props.match.params.name }</h1>
            <Link to = '/'>Home</Link>
        </>
    )
};

const EmptyPage = () => (
    <h1>404 page</h1>
);

export const App = () => {
    return (
        <Switch>
            <Route component = { Home } path = '/' exact />
            <Route component = { Profile } path = '/profile/:name' exact />
            <Route component = { EmptyPage } path = '/unknown' exact />
            <Redirect to = '/unknown' />
        </Switch>
    );
};