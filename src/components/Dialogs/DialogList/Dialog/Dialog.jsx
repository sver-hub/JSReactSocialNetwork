import React from "react";
import style from './Dialog.module.css'
import {NavLink} from "react-router-dom";


export const Dialog = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={style.wrapper}>
            <div className={style.thumbnail}>
                <img src={props.imgUrl} alt=""/>
                {props.unread !== 0 &&
                <span className={style.unread}>{props.unread < 1000 ? props.unread : '...'}</span>}
                {props.online && <span className={style.online}/>}
            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <span className={style.name}>{props.dialogName}</span>
                    <span className={style.timestamp}>{props.timestamp}</span>
                </div>
                <div className={style.preview}>
                    <span className={style.senderName}>{props.senderName}:</span>
                    <span className={style.previewMessage}>{props.previewMessage}</span>
                </div>
            </div>
        </NavLink>
    )
}