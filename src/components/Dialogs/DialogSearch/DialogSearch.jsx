import React from "react";
import style from './DialogSearch.module.css'

export const DialogSearch = () => {
    return (
        <div className={style.wrapper}>
            <span className={style.magnifyingGlass}/>
            <input className={style.searchInput} placeholder={'Search dialogs...'}/>
        </div>
    )
}