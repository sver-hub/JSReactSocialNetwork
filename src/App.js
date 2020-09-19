import React from 'react';
import './App.css';

import {Header} from './components/Header/Header.jsx';
import {Route} from "react-router-dom";
import {NavbarContainer} from "./components/NavBar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {FriendsSearchResultsContainer} from "./components/Friends/FindFriends/FriendsSearchResults/FriendsSearchResultsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className={'contentWrapper'}>
                <Route path={'/profile'} render={() => <ProfileContainer/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/findFriends'} render={() => <FriendsSearchResultsContainer />} />
            </div>
        </div>
    )
}

export default App;
