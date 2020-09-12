import React from 'react';
import style from './MyPosts.module.css'
import {Post} from './Post/Post'

export const MyPosts = (props) => {
    return (
        <div>
            {props.posts.map((post, index) => <Post key={index}
                                                    userName={post.userName}
                                                    message={post.message}
                                                    likes={post.likes}
                                                    comments={post.comments}
                                                    shares={post.shares}
                                                    imgUrl={post.imgUrl}/>)}
        </div>
    )
}