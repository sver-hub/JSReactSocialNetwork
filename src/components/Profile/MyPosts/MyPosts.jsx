import React from 'react';
import style from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
    return (
        <div>
      posts
      <div>
        new post
      </div>
      <Post message='post 1 hello' likes='21'/>
      <Post message='post 2 bye' likes='24'/>
    </div>
    )
}