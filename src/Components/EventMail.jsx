import React from 'react'
import './Styles/EventMail.scss'
import { Link } from 'react-router-dom'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF , faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const EventMail = () => {
    return (
        <div className='EventMail-section'>
               <div className="row">
                    <div className='title1 col-lg-6'>
                        <div className="container">
                        <h1 className='first'>
                        Join Mailing List
                        </h1>
                        <h2 className='second'>
                        To get more information about  the creek, enter your email 
                        address, confirm you are happy to receive our emails and then select  ‘Subscribe’.
                        </h2>

                         <div class="name1">
                            <label class="visually-hidden" for="autoSizingInput">First Name</label>
                            <input type="text" placeholder="First Name"
                            class="forms text-start" id="autoSizingInput" >
                            </input>
                        </div>
                        <div class="name1">
                            <label class="visually-hidden" for="autoSizingInput">Email Address </label>
                            <input type="email" placeholder="Email Address "
                            class="forms text-start" id="autoSizingInput" >
                            </input>
                        </div>
                        <Link to='/'>
                            <button type="button" class=" submits">Submit</button>
                        </Link>
                        </div>
                        
                    </div>
                    <div className=' col-lg-6 title2'>
                    <div className='event'>
                                Upcoming Events
                    </div>
                    <div class="container upcoming">
                        <div class="row">
                            <div class="col-lg-2 ">
                           <div className='date1'>
                               15  
                           </div>
                           <div className="date2">
                                Oct
                           </div>
                           <div className='dash'>
                           </div>
                            </div>
                            <div class="col-lg-10">
                            <div className='career'>
                                How To Balance School with Career Pursuit
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="container upcoming">
                        <div class="row">
                            <div class="col-lg-2">
                           <div className='date1-2'>
                               15  
                           </div>
                           <div className="date2-2">
                                Oct
                           </div>
                           <div className='dash2'>
                           </div>
                            </div>
                            <div class="col-lg-10">
                            <div className='career2'>
                                How To Balance School with Career Pursuit
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="container upcoming">
                        <div class="row">
                            <div class="col-lg-2 ">
                           <div className='date1-3'>
                               15  
                           </div>
                           <div className="date2-3">
                                Oct
                           </div>
                           <div className='dash3'>
                           </div>
                            </div>
                            <div class="col-lg-10">
                            <div className='career3'>
                                Codegaminators 9.0
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div class="row">
                    <div class="col-md-4 text-start contact-us">
                    <div className="location">
                        Rivers State ICT Department, opposite the Pleasure Park,
                        Aba Road, Port Harcourt
                    </div>
                    <div className="web">
                    <div> <FontAwesomeIcon icon={faEnvelope} /> talk@techcreek.ng
                    
                    </div>
                    <div> <FontAwesomeIcon icon={faPhoneAlt} /> 09030003185, 09030003180</div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faFacebookF} className="footer-social-icons" />
                        <FontAwesomeIcon icon={faLinkedin} className="footer-social-icons" />
                        <FontAwesomeIcon icon={faTwitter} className="footer-social-icons" />
                        <FontAwesomeIcon icon={faInstagram} className="footer-social-icons" />
                    </div>
                    </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div class="col-md-4 text-end copyright">
                    <div className="copy-right">
                    &#169; 2021 Tech Creek, All Right Reserved
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