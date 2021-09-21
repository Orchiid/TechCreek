import React from 'react'
import logo from './Images/creeklogo.png'
import './Styles/Navbar.scss'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

    return (
        <div className="navbar-background">
             <nav className="navbar navbar-expand-lg navbar-light fixed-top menu d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">
    <Link className="navbar-brand" to="/"><img src={logo} alt="TechCreek Logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link scrollto active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link scrollto" to="/">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link scrollto" to="/">Updates</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Community
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Learn</Link></li>
            <li><Link className="dropdown-item" to="/">Create</Link></li>
            <li><Link className="dropdown-item" to="/">Connect</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ongoing Applications
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Codegaminators 9.0</Link></li>
            <li><Link className="dropdown-item" to="/">ICT Competency Verification</Link></li>
            <li><Link className="dropdown-item" to="/">ICT Competency Training</Link></li>
          </ul>
        </li>
      </ul>
      <Button />
    </div>
  </div>
</nav>
        </div>
       
        // <nav className="navbar navbar-expand-lg navbar-dark bgc fixed-top">
        //     <div className="container">
        //         <Link to='/' className="navbar-brand" >
        //             <img src={logo} alt="Logo" />
        //         </Link>
        //         <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon  "></span>
        //         </button>
        //         <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link to='/' id='Home' className=" active1 nav-link  active2" aria-current="page" >Home</Link>
        //                 </li>
        //                 <li className="nav-item ps-5">
        //                     <Link to='/' id='AboutUs' className="nav-link text-sucess active2 " >About Us</Link>
        //                 </li>
        //                 <li className="nav-item ps-5">
        //                     <Link to='/' id='Updates' className="nav-link text-sucess active2" >Updates</Link>
        //                 </li>
                        
        //                 <li className="nav-item dropdown ps-5">                           
        //                     <Link to='/' id='Community' className="nav-link dropdown-toggle text-sucess active2"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Community
        //                     </Link>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                         <li><Link to='/' className="dropdowns" >Learn</Link></li>
        //                         <li><Link to='/' className="dropdowns" >Create</Link></li>
        //                         <li><Link to='/' className="dropdowns" >Connect</Link></li>
        //                     </ul>
        //                 </li>
                        
        //                 <li className="nav-item dropdown ps-5">
        //                     <Link to='/' id='OngoingApplications' className="nav-link dropdown-toggle text-sucess active2"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Ongoing Applications
        //                     </Link>
        //                     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        //                         <li><Link to='/' className=" dropdowns" >Codegaminators 9.0</Link></li>
        //                         <li><Link to='/' className=" dropdowns" >ICT Compentency Verication</Link></li>
        //                         <li><Link to='/' className=" dropdowns" >ICT Compentency Training</Link></li>
                                
        //                     </ul>
        //                 </li>

        //                 <li className="nav-item ps-5  ">
        //                     <Link to='/' id='LogIn' className="nav-link  " >
        //                     <button className="login" type='button'>Log In</button>
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar
