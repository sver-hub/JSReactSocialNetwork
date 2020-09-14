import React from 'react'
import style from './NavBar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";


export const NavBar = (props) => {
    return (
        <nav className={style.nav}>
            <ol>
                {props.items.map((item, index) => <NavbarItem key={index} {...item}/>)}
            </ol>
        </nav>
    )
}