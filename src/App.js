import React from 'react';
import './App.css';

import {Header} from './components/Header/Header.jsx';
import {NavBar} from './components/NavBar/NavBar.jsx';
import {Profile} from './components/Profile/Profile.jsx'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className={'contentWrapper'}>
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/dialogs'} component={Dialogs} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
