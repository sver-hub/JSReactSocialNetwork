import React from "react";
import style from './Dialogs.module.css'
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";

export const Dialogs = () => {
    return (
        <FloatingWrapper>
            <div className={style.dialogsWrapper}>
                <div className={style.dialogListWrapper}>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
                <div className={style.currentDialogWrapper}>
                    <div className={style.userInfo}>
                        Steffuled
                    </div>
                    <div className={style.dialogHistory}>
                        yo
                    </div>
                    <div className={style.messageWrapper}>
                        <input type={'text'}/>
                    </div>
                </div>
            </div>
        </FloatingWrapper>
    )
}