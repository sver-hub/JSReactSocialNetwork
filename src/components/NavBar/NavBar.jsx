import React from 'react'
import style from './NavBar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";

const items = [
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/846/846449.svg', url: '/profile', name: 'Profile'},
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2462/2462719.svg', url: '/dialogs', name: 'Messages'},
    {iconUrl: 'https://www.flaticon.com/premium-icon/icons/svg/2886/2886141.svg', url: '', name: 'News'},
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/876/876766.svg', url: '', name: 'Music'},
    {iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg', url: '', name: 'Settings'},
]

export const NavBar = (props) => {
    return (
        <nav className={style.nav}>
            <ol>
                {items.map((item, index) => <NavbarItem key={index} iconUrl={item.iconUrl}
                                                        itemUrl={item.url} itemName={item.name}/>)}
            </ol>
        </nav>
    )
}