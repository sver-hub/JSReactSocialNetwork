import React from 'react';
import style from './ProfileCard.module.css'
import {InfoItem} from "./InfoItem/InfoItem";
import {FloatingWrapper} from "../../FloatingWrapper/FloatingWrapper";


export const ProfileCard = (props) => {
    const iconUrl1 = 'https://w7.pngwing.com/pngs/144/173/png-transparent-person-icon-illustration-computer-icons-icon-design-symbol-person-symbol-miscellaneous-monochrome-sticker-thumbnail.png';
    return (
        <FloatingWrapper>
            <div className={style.profileCardWrapper}>
                <div className={style.userPic}>
                    <img src={'https://sun1-84.userapi.com/c834404/v834404259/181331/_8I5zPYp_wE.jpg'} alt={'jopa'}/>
                </div>
                <div className={style.infoWrapper}>
                    <div className={style.userName}>{`${props.name} ${props.surname}`}</div>
                    <div className={style.userStatus}>{props.status}</div>
                    <div className={style.userStatus}>{props.location}</div>
                    <div className={style.userInfo}>
                        personal info
                    </div>
                    <div className={style.accountInfo}>
                        <InfoItem icon={iconUrl1} description={'Subscribers'} count={54}/>
                    </div>
                </div>
            </div>
        </FloatingWrapper>
    )
}