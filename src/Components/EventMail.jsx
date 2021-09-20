import React from 'react'
import './Styles/EventMail.scss'
import { Link } from 'react-router-dom'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import fbicon from './Images/facebookicon.png'
import igicon from './Images/instagramicon.png'
import linkdlnicon from './Images/linkedinicon.png'
import twittricon from './Images/twittericon.png'

 const EventMail = () => {
    return (
        <div className='EventMail-section'>
            <div className="container-fluid">
               <div className="row">
                    <div className='title1 col-lg-6'>
                        <h1 className='first'>
                        Join Mailing List
                        </h1>
                        <h2 className='second'>
                        To get more information about  the creek, enter your email 
                        address, confirm you are happy to receive our emails and then select  ‘Subscribe’.
                        </h2>

                        
                      
                        <div class="name1">
                            <label className="visually-hidden" for="autoSizingInput">First Name</label>
                            <input type="text" placeholder="First Name"
                            className="forms text-start" id="autoSizingInput" >
                            </input>
                        </div>
                        <div className="name1">
                            <label className="visually-hidden" for="autoSizingInput">Email Address </label>
                            <input type="email" placeholder="Email Address "
                            className="forms text-start" id="autoSizingInput" >
                            </input>
                        </div>
                        <div >
                        <Link to='/' className="name1b">
                            <button type="button" className=" submits">Submit</button>
                        </Link>
                        </div>
                    </div>
                    <div className=' col-lg-6 title2'>
                    <div className='event'>
                                Upcoming Events
                    </div>
                    <div className="container upcoming">
                        <div className="row">
                            <div className="col-lg-2 ">
                           <div className='date1'>
                               15  
                           </div>
                           <div className="date2">
                                Oct
                           </div>
                           <div className='dash'>
                           </div>
                            </div>
                            <div className="col-lg-10">
                            <div className='career'>
                                How To Balance School with Career Pursuit
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="container upcoming">
                        <div className="row">
                            <div className="col-lg-2">
                           <div className='date1-2'>
                               15  
                           </div>
                           <div className="date2-2">
                                Oct
                           </div>
                           <div className='dash2'>
                           </div>
                            </div>
                            <div className="col-lg-10">
                            <div className='career2'>
                                How To Balance School with Career Pursuit
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="container upcoming">
                        <div className="row">
                            <div className="col-lg-2 ">
                           <div className='date1-3'>
                               15  
                           </div>
                           <div className="date2-3">
                                Oct
                           </div>
                           <div className='dash3'>
                           </div>
                            </div>
                            <div className="col-lg-10">
                            <div className='career3'>
                                Codegaminators 9.0
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 text-start contact-us">
                    <div className="location">
                        Rivers State ICT Department, opposite the Pleasure Park,
                        Aba Road, Port Harcourt
                    </div>
                    <div className="web">
                    <div> <FontAwesomeIcon icon={faEnvelope} /> talk@techcreek.ng
                    
                    </div>
                    <div> <FontAwesomeIcon icon={faPhoneAlt} /> 09030003185, 09030003180</div>
                    <div className="icons">
                        <img src={fbicon} alt="facebook icon" className="fb" />
                        <img src={linkdlnicon} alt="linkedIn icon" className="linkln" />
                        <img src={twittricon} alt="twitter icon" className="twitr" />
                        <img src={igicon} alt="instagram icon" className="ig" />
                    </div>
                    </div>
                    </div>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-3'></div>
                    <div className="col-lg-3  copyright">
                    <div className="copy-right">
                    Copyright 2021 Tech Creek, All Right Reserved
                    </div>
                    <div className="policy">
                    Privacy Policy  | Terms Of Use
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default EventMail