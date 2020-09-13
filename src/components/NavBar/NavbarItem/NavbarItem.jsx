import React from "react";
import style from './NavbarItem.module.css'
import {NavLink} from "react-router-dom";

export const NavbarItem = (props) => {
    return (
        <li>
            <NavLink to={props.itemUrl} className={style.navbarItemWrapper}>
                <img src={props.iconUrl} alt="" className={style.icon}/>
                <span className={style.item}>{props.itemName}</span>
            </NavLink>
        </li>
    )
}