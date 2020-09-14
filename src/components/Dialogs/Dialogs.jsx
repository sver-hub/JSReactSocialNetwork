import React from "react";
import style from './Dialogs.module.css'
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";
import {DialogList} from "./DialogList/DialogList";
import {DialogHeader} from "./DialogHeader/DialogHeader";
import {DialogHistory} from "./DialogHistory/DialogHistory";
import {NewMessageInput} from "./NewMessage/NewMessageInput";
import {DialogSearch} from "./DialogSearch/DialogSearch";


export const Dialogs = (props) => {
    return (
        <FloatingWrapper>
            <div className={style.dialogsWrapper}>
                <DialogSearch/>
                <DialogList dialogs={props.dialogs}/>
                <DialogHeader dialogName={props.dialogs[0].dialogName} dialogStatus={props.dialogs[0].status}
                              imgUrl={props.dialogs[0].imgUrl}/>
                <DialogHistory/>
                <NewMessageInput/>
            </div>
        </FloatingWrapper>
    )
}