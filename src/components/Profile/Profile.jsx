import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileCard} from './ProfileCard/ProfileCard'
import {NewPostInputContainer} from "./MyPosts/NewPostInput/NewPostInputContainer";


export const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileCard {...props.userData}/>
            <NewPostInputContainer/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
