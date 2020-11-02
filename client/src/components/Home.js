import React from 'react'
import NavBar from './NavBar'
import './Home.css'
import EssencePractical from './EssencePractical'
import Paragraphs from './Paragraphs'
import DeepFocus from './DeepFocus'
import Registration from './Registration'
import Footer from './Footer'

function Home () {
  
  return(
    <div>
        <NavBar />
        <EssencePractical />
        <Paragraphs />
        <DeepFocus />
        <Registration />
        <Footer />
    </div>
  )
}

export default Home