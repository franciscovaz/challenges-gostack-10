import React, { Component } from 'react';
import Post from './Post';
import profile from '../assets/perfil1.jpg';
import doctor from '../assets/doctor.png';
import man from '../assets/man.png';
import woman from '../assets/woman.png';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?Pessoal, alguém sabe se a Rocketseat está contratando?Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: doctor
            },
            content: "Contéudo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Francisco Vaz",
          avatar: profile
        },
        date: "15 Jun 2019",
        content: "Pessoal, onde querem ir hoje? Quero adicionar bastante texto para ver como isto fica, se sai das margens ou nao!!!!",
        comments: [
          {
            id: 1,
            author: {
              name: "Trilareu Roberto",
              avatar: man
            },
            content: "Estudar um pouco. Quero ver como fica o ecra quando o comentário é muito grande para ver se sai ou nao fora"
          },
          {
            id: 2,
            author: {
              name: "Francisca Pereira",
              avatar: woman
            },
            content: "Bora Codar!"
          }
        ]
      }
    ]
  }

  render(){
    return(
      <div className="postlist">
        {this.state.posts.map(post => (
          <Post 
            key={post.id} 
            data={post} 
        />
        ))}
      </div>
      )
  };

}

export default PostList;