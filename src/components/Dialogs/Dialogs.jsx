import React from "react";
import style from './Dialogs.module.css'
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";
import {DialogList} from "./DialogList/DialogList";
import {DialogHeader} from "./DialogHeader/DialogHeader";
import {DialogHistory} from "./DialogHistory/DialogHistory";
import {NewMessageInputContainer} from "./NewMessage/NewMessageInputContainer";
import {DialogSearch} from "./DialogSearch/DialogSearch";


export const Dialogs = (props) => {
    debugger;
    return (
        <FloatingWrapper>
            <div className={style.dialogsWrapper}>
                <DialogSearch/>
                <DialogList dialogs={props.dialogList}/>
                <DialogHeader dialogName={props.dialogList[0].dialogName} dialogStatus={props.dialogList[0].status}
                              imgUrl={props.dialogList[0].imgUrl}/>
                <DialogHistory messages={props.messages}/>
                <NewMessageInputContainer/>
            </div>
        </FloatingWrapper>
    )
}