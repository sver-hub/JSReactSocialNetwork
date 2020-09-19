import React from "react";
import style from './FriendsSearchResults.module.css'
import {UserCard} from "./UserCard/UserCard";
import {FloatingWrapper} from "../../../FloatingWrapper/FloatingWrapper";

export const FriendsSearchResults = (props) => {
    return (
        <FloatingWrapper>
            <div className={style.header}>People</div>
            <div className={style.wrapper}>
                {props.friendsSearchResult.map((u, key) => <UserCard key={key} {...u}
                                                                     onFollowUnfollowClick={props.onFollowUnfollowClick}/>)}
            </div>
        </FloatingWrapper>
    )
}