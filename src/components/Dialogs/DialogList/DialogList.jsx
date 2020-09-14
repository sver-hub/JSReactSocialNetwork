import React from "react";
import style from './DialogList.module.css'
import {Dialog} from "./Dialog/Dialog";


export const DialogList = (props) => {
    return (
        <div className={style.dialogListWrapper}>
            <ol>
                {props.dialogs.map((dialog, index) => <Dialog key={index} {...dialog} />)}
            </ol>
        </div>
    )
}