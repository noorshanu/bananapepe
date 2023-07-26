import React, { useState } from "react";
import "./Navbar.css";
// import { FaApple,} from "react-icons/fa";
// import {IoLogoGooglePlaystore} from 'react-icons/io5'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../images/logo.png'

function Navbar() {

      const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav container">
        {/* 1st logo part  */}
        <div className="logo">
          <a href="/">

          <img src={Logo} alt="logo" className="logo-nav"/>
          </a>
          
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <ul className="">
          <li>
             <a href="/" className="btn-btn-nav">
              <img src="images/img4.png" alt="" height='25'/> </a>
            </li>
         
         <li>
          <a href="/">
          <img src="images/uni.png" alt="" height='35'/>  

          </a>
         </li>

         <li>
          <a href="/" className="">
          <img src="images/dex.svg" alt="" height='25'/>  

          </a>
         </li>
           
          
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
          <li>
             <a href="/" className="btn-btn-nav"> DexView</a>
            </li>
         
         <li>
          <a href="/">
           UNISWAP

          </a>
         </li>

         <li>
          <a href="/">
            DEXTOOLs

          </a>
         </li>
           
          
          </ul> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar