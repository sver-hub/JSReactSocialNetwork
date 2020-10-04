import React, {useContext, useEffect, useState} from 'react';
import style from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {ProfileCard} from './ProfileCard/ProfileCard'
import {NewPostInputContainer} from "./MyPosts/NewPostInput/NewPostInputContainer";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";


export const Profile = (props) => {
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await request(`/api/profile/`, 'GET',
                    null, {'Authorization': 'Bearer ' + auth.token})
                setUserData(userData)
            } catch (e) {}

        }
        getUserData()
    }, [request, auth.token])

    return (
        <div className={style.profile}>
            <ProfileCard {...userData}/>
            <NewPostInputContainer/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
