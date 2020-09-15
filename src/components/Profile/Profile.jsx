import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileCard} from './ProfileCard/ProfileCard'
import {NewPostInput} from "./MyPosts/NewPostInput/NewPostInput";


export const Profile = (props) => {
    return (
        <div className={style.profile}>
            <ProfileCard {...props.userData}/>
            <NewPostInput imgUrl={props.userData.imgUrl} newPostText={props.newPostText} dispatch={props.dispatch}/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
