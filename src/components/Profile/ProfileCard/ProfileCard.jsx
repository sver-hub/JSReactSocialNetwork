import React from 'react';
import style from './ProfileCard.module.css'
import {InfoItem} from "./InfoItem/InfoItem";


export const ProfileCard = (props) => {
    const iconUrl1 = 'https://w7.pngwing.com/pngs/144/173/png-transparent-person-icon-illustration-computer-icons-icon-design-symbol-person-symbol-miscellaneous-monochrome-sticker-thumbnail.png';
    return (
        <div className={ style.profileCardWrapper }>
            <img src="https://sun1-84.userapi.com/c834404/v834404259/181331/_8I5zPYp_wE.jpg" alt=""/>
            <div className={style.infoWrapper}>
                <div className={style.userName}>{props.userName}</div>
                <div className={style.userStatus}>{props.userStatus}</div>
                <div className={style.userInfo}>
                    personal info
                </div>
                <div className={style.accountInfo}>
                    <InfoItem icon={iconUrl1} description={'Subscribers'} count={54}/>
                </div>
            </div>
        </div>
    )
}