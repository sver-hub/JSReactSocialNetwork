import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileCard} from './ProfileCard/ProfileCard'
import {NewPostInput} from "./MyPosts/NewPostInput/NewPostInput";

const data = {
    userName: 'Sver',
    userStatus: 'Koshi for work, Geine for soul',
    imgUrl: 'https://sun1-84.userapi.com/c834404/v834404259/181331/_8I5zPYp_wE.jpg',
    posts: [
        {
            userName: 'steffuld',
            message: 'message 1',
            likes: 32,
            comments: 2,
            shares: 14,
            imgUrl: 'https://bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1-1200x900.jpg'
        },
        {
            userName: 'steffuld',
            message: 'message 2',
            likes: 312,
            comments: 14,
            shares: 120,
            imgUrl: 'https://bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1-1200x900.jpg'
        },
        {
            userName: 'steffuld',
            message: 'message 1',
            likes: 32,
            comments: 2,
            shares: 14,
            imgUrl: 'https://bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1-1200x900.jpg'
        },
        {
            userName: 'steffuld',
            message: 'message 1',
            likes: 32,
            comments: 2,
            shares: 14,
            imgUrl: 'https://bleedingcool.com/wp-content/uploads/2019/12/babyyoda-1-1200x900.jpg'
        },
    ]
};


export const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <ProfileCard userImg={data.imgUrl} userName={data.userName} userStatus={data.userStatus}/>
            </div>
            <NewPostInput imgUrl={data.imgUrl}/>
            <MyPosts posts={data.posts}/>

        </div>

    )
}
