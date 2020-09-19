import React from "react";
import style from './UserCard.module.css'

export const UserCard = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={props.imgUrl} alt="" className={style.photo}/>
            <div className={style.infoWrapper}>
                <span className={style.name}>{props.userName}</span>
                <span className={style.location}>{props.userLocation.place + ', ' + props.userLocation.country}</span>
                <span className={style.status}>{props.userStatus}</span>
            </div>
            <button className={style.followUnfollowBtn} onClick={() => props.onFollowUnfollowClick(props.id)}>
                {props.friend ? 'Remove friend' : 'Add friend'}
            </button>
        </div>
    )
}