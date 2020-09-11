import React from 'react';
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileCard } from './ProfileCard/ProfileCard'


export const Profile = () => {
    return (
      <div className={style.profile}>
      <div>
      <ProfileCard userName={'Sver'} userStatus={'Koshi for work, Geine for soul'}/>
    </div>
      <MyPosts />

    </div>
    
    )
}
