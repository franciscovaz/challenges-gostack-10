import React from 'react';
import './App.css'

import profile from './assets/perfil1.jpg';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}

export default App;