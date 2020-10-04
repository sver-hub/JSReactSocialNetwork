import React, {useContext} from 'react';
import style from './Header.module.css'
import {AuthContext} from "../../context/AuthContext";

export const Header = () => {

    const auth = useContext(AuthContext)

    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <img
                    src='https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png'
                    alt={''}/>
                {auth.isAuthenticated && <button className={style.logout} onClick={auth.logout}>Logout</button>}
            </div>
        </header>
    )
}
