import React from 'react'
import './Styles/HeroSection.scss'
import heroImage from './Images/img2.png'
import { Link } from 'react-router-dom'

 const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='container'>
               <div className="row">
                    <div className='title col-md-6'>
                        <h1 className='main-title'>
                           Welcome to <br /> <span>the &#60;Creek/&#62;</span> 
                        </h1>
                        <h2 className='subtitle'>
                        TechCreek is a habitat for the teeming population of youths 
                        making sense of their lives with digital skills and competencies,
                         and actively involved in the development of the ‘new economy’ for Rivers State.
                        </h2>
                        <Link to='/'>
                            <button type="button" class=" joincreek">Join The Creek</button>
                        </Link>
                    </div>
                    <div className=' col-md-1'></div>
                    <div className=' col-md-5'>
                        <img src={heroImage} className="sideimage" alt="hero " /></div>
                    </div>
                </div>      
        </div>
       
    )
}

export default HeroSection