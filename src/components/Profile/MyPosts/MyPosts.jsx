import React from 'react';
import {Post} from './Post/Post'

export const MyPosts = (props) => {
    return (
        <div>
            {props.posts.map((post, index) => <Post key={index} {...post}/>)}
        </div>
    )
}