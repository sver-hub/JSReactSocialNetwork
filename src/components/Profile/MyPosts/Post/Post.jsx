import React from 'react';
import style from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.header}>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                     alt={`${props.userName}'s pic`} className={style.userPic}/>
                <span className={style.userName}>steffuld</span>
                <span className={style.date}>10.09.2020</span>
            </div>
            <div className={style.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam assumenda consequatur corporis
                    doloribus ex ipsam iste laborum maxime molestiae odit placeat porro provident quis reiciendis
                    repudiandae similique vel, voluptatem! Ad adipisci aliquid assumenda culpa, eius ex facere impedit
                    ipsa labore minus molestiae necessitatibus officia omnis sit soluta tenetur, unde velit voluptas!
                    Aspernatur, blanditiis deleniti deserunt voluptatibus.</p>
            </div>
            <div className={style.footer}>
                <div className={style.likeWrapper}>
                    <button className={style.likeBtn}>{"<3"}</button>
                    <span className={style.likeCount}>666</span></div>
                <div className={style.commentWrapper}>
                    <button className={style.commentBtn}>{'(_)'}</button>
                    <span className={style.commentCount}>14</span>
                </div>
                <div className={style.shareWrapper}>
                    <button className={style.shareBtn}>{'=>'}</button>
                    <span className={style.shareCount}>1488</span></div>
            </div>
        </div>
    )
}