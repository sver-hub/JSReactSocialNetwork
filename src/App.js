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
                <NavBar items={props.items}/>
                <div className={'contentWrapper'}>
                    <Route path={'/profile'} render={() => <Profile profile={props.profile} posts={props.posts}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.dialogs}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
