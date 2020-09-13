import React from "react";
import style from './FloatingWrapper.module.css'

export const FloatingWrapper = (props) => {
    return (
        <div className={style.floatingWrapper} >
            {props.children}
        </div>
    )
}