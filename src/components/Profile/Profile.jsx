import React from 'react';
import style from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts'
import { ProfileCard } from './ProfileCard/ProfileCard'


export const Profile = () => {
    return (
      <div className={style.profile}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU' />
      <div>
      <ProfileCard />
    </div>
      <MyPosts />

    </div>
    
    )
}
