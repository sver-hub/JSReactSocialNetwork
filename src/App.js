import React from 'react';
import './App.css';

import {Header} from './components/Header/Header.jsx';
import {NavbarContainer} from "./components/NavBar/NavbarContainer";
import {useRoutes} from "./routes";
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";


const App = (props) => {
    const {token, userId, login, logout} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer/>
                <div className={'contentWrapper'}>
                    {routes}
                </div>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
