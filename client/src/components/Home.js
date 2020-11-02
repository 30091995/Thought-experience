import React from 'react'
import NavBar from './NavBar'
import './Home.css'
import EssencePractical from './EssencePractical'
import Paragraphs from './Paragraphs'
import DeepFocus from './DeepFocus'
import Registration from './Registration'

function Home () {
  
  return(
    <div>
        <NavBar />
        <EssencePractical />
        <Paragraphs />
        <DeepFocus />
        <Registration />
    </div>
  )
}

export default Home