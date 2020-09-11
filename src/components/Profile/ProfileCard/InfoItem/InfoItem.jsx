import React from 'react';
import style from './InfoItem.module.css'

export const InfoItem = (props) => {
    return (
        <div className={style.item}>
            <img src={props.icon} alt=""/>
            <span className={style.description}>{props.description}</span>
            <span className={style.count}>{props.count}</span>
        </div>
    )
}