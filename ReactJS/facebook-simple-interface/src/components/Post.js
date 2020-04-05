import React, { Component } from 'react';
import Comment from './Comment';
import profile from '../assets/perfil1.jpg';

function Post( {data} ){
    return (
      <div className="post">
        <div className="post-header">
          <img className="avatar" src={data.author.avatar} />
          <div className="details">
            <span>{data.author.name}</span>
            <span>{data.date}</span>
          </div>
        </div>
        <p className="post-content">{data.content}</p>
          
          <Comment comments={data.comments}/>

      </div>
    )
};

export default Post;