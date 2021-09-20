import React from 'react'
import './Styles/Learn.scss'
import connectImage from './Images/connect.png'
import { faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'

 const Learn = () => {

    return (
        <div className="learn-section">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <img src={connectImage} alt="Connect " />
                </div>
                <div className="col-md-6 head">
                    <div className='heading1'>
                    <h1 className="learn-heading-one"> Connect </h1>
                   
                            <button type="button" className=" events">Events</button>
                   
                    </div>

                    <h1 className="learn-heading-two">Get job-ready for an in-demand career.</h1>
                    <p className="header-learn-desc">
                    We provide avenues of continuous development for learners to acquire new skills
                    and practical competences to meet the ever evolving needs of mankind. 
                    Explore our training programs for different categories of learners.
                    </p>
                </div>
                <div className="col-md-2">
                <Link to='/'>
                    <button type="button" className=" viewevents">View Events<FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                    </Link>
                </div>
                </div>
                <div className="grey-border"></div>
            </div>
        </div>
//         <div className="learn learn-section">
//             <div className="container">
//   <div className="row">
//     <div className="col-md-4 img3">
//      <img src={learnImage} alt="learn-image" />
//     </div>
//     <div className="col-md-6 ">
//     <h1>Learn</h1>
//     <h3>Get job-ready for an in-demand career.</h3>
//     <h5>We provide avenues of continuous development for learners to acquire new skills
//         and practical competences to meet the ever evolving needs of mankind. 
//         Explore our training programs for different categories of learners.
//     </h5>
//     </div>
//     <div className="col-md-2">
//         <a href="#">
//             <button type="button" className=" viewcourses">View Courses</button>
//         </a>
//     </div>
//   </div>
// </div>

//         </div>

    )
}

export default Learn