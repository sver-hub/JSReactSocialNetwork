import React from 'react';
import style from './Post.module.css'
import {FloatingWrapper} from "../../../FloatingWrapper/FloatingWrapper";

export const Post = (props) => {
    return (
        <FloatingWrapper>
            <div className={style.post}>
                <div className={style.header}>
                    <img src={props.imgUrl}
                         alt={`${props.userName}'s pic`} className={style.userPic}/>
                    <span className={style.userName}>{props.userName}</span>
                    <span className={style.date}>{props.date}</span>
                </div>
                <div className={style.content}>
                    <p>{props.message}</p>
                </div>
                <div className={style.footer}>
                    <div className={style.likeWrapper}>
                        <button className={style.likeBtn}>{"<3"}</button>
                        <span>{props.likes}</span></div>
                    <div className={style.commentWrapper}>
                        <button className={style.commentBtn}>{'(_)'}</button>
                        <span>{props.comments}</span>
                    </div>
                    <div className={style.shareWrapper}>
                        <button className={style.shareBtn}>{'=>'}</button>
                        <span>{props.shares}</span></div>
                </div>
            </div>
        </FloatingWrapper>
    )
}