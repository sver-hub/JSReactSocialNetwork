import React from "react";
import style from './Dialogs.module.css'
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";
import {DialogList} from "./DialogList/DialogList";
import {DialogHeader} from "./DialogHeader/DialogHeader";
import {DialogHistory} from "./DialogHistory/DialogHistory";
import {NewMessageInput} from "./NewMessage/NewMessageInput";
import {DialogSearch} from "./DialogSearch/DialogSearch";


export const Dialogs = (props) => {
    debugger;
    return (
        <FloatingWrapper>
            <div className={style.dialogsWrapper}>
                <DialogSearch/>
                <DialogList dialogs={props.dialogs.dialogList}/>
                <DialogHeader dialogName={props.dialogs.dialogList[0].dialogName} dialogStatus={props.dialogs.dialogList[0].status}
                              imgUrl={props.dialogs.dialogList[0].imgUrl}/>
                <DialogHistory messages={props.dialogs.messages}/>
                <NewMessageInput textAreaContent={props.dialogs.textAreaContent} dispatch={props.dispatch}/>
            </div>
        </FloatingWrapper>
    )
}