// Core
import React, { Component } from 'react';

// Components
import { Feed } from '../../components/Feed';
import { Provider } from '../../components/HOC/withProfile';

// Instruments
import avatar from "../../theme/assets/lisa.png";

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName: 'Simpson',
};

export const App = () => {
    return <Provider value = { options }>
        <Feed />
    </Provider>;
};
