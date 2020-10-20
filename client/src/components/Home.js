import React from 'react'
import NavBar from './NavBar'
import './Home.css'
import EssencePractical from './EssencePractical'
import Paragraphs from './Paragraphs'

function Home () {
  
  return(
    <div>
        <NavBar />
        <EssencePractical />
        <Paragraphs />
    </div>
  )
}

export default Home