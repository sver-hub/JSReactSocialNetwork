import React from "react";
import style from './Dialogs.module.css'
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";
import {Dialog} from "./Dialog/Dialog";

const dialogs = [
    {
        imgUrl: 'https://sun1-47.userapi.com/VjwdhQdrVdnj0vM83TBcr11D3iBIgIFwG-0wQA/V62nA_GEtg4.jpg?ava=1',
        dialogName: 'pm301',
        senderName: 'hui',
        previewMessage: 'pizda',
        timestamp: '22:32',
        unread: 13144,
        online: true
    },
    {
        imgUrl: 'https://sun9-56.userapi.com/impf/qvSmwMxG_nIXi_dnYO8XsyhibaUB56g13K72QQ/Pn9LL_twQO8.jpg?size=100x0&quality=88&crop=79,50,576,576&sign=60277e3265ac4b1b44d290b16b48b1ff&ava=1',
        dialogName: 'steffuled',
        senderName: 'steffuled',
        previewMessage: 'lollollollollollollollollollol',
        timestamp: '22:11',
        unread: 0,
        online: false
    },
    {
        imgUrl: 'https://sun9-52.userapi.com/impf/c851324/v851324224/1adcb3/NFwtlV8Z_bk.jpg?size=100x0&quality=88&crop=254,176,692,692&sign=642e3daacba0f787c20d0750b86b7d34&ava=1',
        dialogName: 'karpinka',
        senderName: 'you',
        previewMessage: 'f',
        timestamp: '21:32',
        unread: 5,
        online: true
    },
]

export const Dialogs = () => {
    return (
        <FloatingWrapper>
            <div className={style.dialogsWrapper}>
                <div className={style.dialogListWrapper}>
                    <ol>
                        {dialogs.map((dialog, index) => <Dialog key={index} {...dialog} />)}
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