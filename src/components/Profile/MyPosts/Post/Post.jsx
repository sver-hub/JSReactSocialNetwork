import React from 'react';
import style from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.item}>
                <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            </div>
            <div className={style.item}>
                { props.message }
            </div>
            <div className={style.item}>
                { props.likes} likes
            </div>
        </div>
    )
}