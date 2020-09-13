import React from "react";
import style from './NavbarItem.module.css'

export const NavbarItem = (props) => {
    return (
        <li>
            <a href={props.itemUrl} className={style.navbarItemWrapper}>
                <img src={props.iconUrl} alt="" className={style.icon}/>
                <span className={style.item}>{props.itemName}</span>
            </a>
        </li>
    )
}