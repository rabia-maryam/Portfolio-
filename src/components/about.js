import React from 'react'
import picture from './portfolio_picture_size_small-removebg-preview (1).png'
import './about.css'

function About() {
  return (
    <>
    <div className='about-main'>
        <div className='about-left'>
            <img src={picture} alt=''/>
        </div>
        <div className='about-right'>
            <h1>About Me</h1>
            <p>
            I'm a passionate Frontend Developer with experience in building dynamic and responsive web applications using React. Currently, I'm expanding my skill set by learning backend development to become a full-stack developer. As a Computer Science student, I enjoy tackling new challenges and constantly improving my coding abilities to create efficient and user-friendly solutions.</p>
            <h3>Name: <span>Rabia Maryam</span></h3>
            <h3>Date-of-Birth: <span>july 24,2002</span></h3>
            <h3>Education: <span>Bachelor in Computer Science</span></h3>
            <h3>Email: <span>rabiakhanfsd789@gmail.com</span></h3>
            <h3>Phone: <span>+92 3095228039</span></h3>
        </div>
    </div>
    </>
  )
}

export default About