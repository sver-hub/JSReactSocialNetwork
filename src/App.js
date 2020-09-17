import React from 'react';
import './App.css';

import {Header} from './components/Header/Header.jsx';
import {NavBar} from './components/NavBar/NavBar.jsx';
import {Profile} from './components/Profile/Profile.jsx'
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar navItems={props.navbar.navItems}/>
                <div className={'contentWrapper'}>
                    <Route path={'/profile'} render={() => <Profile {...props.profile} dispatch={props.dispatch}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
