import React from 'react'
import profile from './portfolio_picture_size_small-removebg-preview (1).png'
import './home.css'

function Home() {
  return (
    <>
    <div className='home_container'>
    <div className='home-left'>
        <h5>As-Salaam-Alaikum!</h5>
        <h1 className='home-h1'>i'm <span className='name'>Rabia Maryam</span></h1>
        <h3>Front-end Developer</h3>
        <a href="mailto:rabiakhanfsd789@gmail.com" className="email-button">Email Me</a>
    </div>
    <div className='home-right'>
        <img src={profile} alt=''   width='350px' height= '500px'/>
    </div>
    </div>
    </>
  )
}

export default Home