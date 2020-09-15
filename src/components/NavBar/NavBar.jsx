import React from 'react'
import style from './NavBar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";


export const NavBar = (props) => {
    return (
        <nav className={style.nav}>
            <ol>
                {props.navItems.map((navItem, index) => <NavbarItem key={index} {...navItem}/>)}
            </ol>
        </nav>
    )
}