import React from 'react'
import style from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";


export const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <ol>
                {props.navItems.map((navItem, index) => <NavbarItem key={index} {...navItem}/>)}
            </ol>
        </nav>
    )
}