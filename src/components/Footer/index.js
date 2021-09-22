import React from "react"
import { IconContext } from "react-icons";
import { 
    FaTwitter, 
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaPinterest,
    FaArrowRight, 
   } from "react-icons/fa";
    import "./Footer.css"
    import {ShopifyIcon} from "../iconsElement.js"




const Footer=()=>{
    return(
        <>
        <IconContext.Provider value={{color:"#d6a458"}}>
        <div className="footer-container">
        <div className="footer-row">
        <div className="footer-col">
        <p>Let's shop together !!<ShopifyIcon/></p>
        </div>
        <div className="footer-col">
        <h3>contact us<div className="underline"><span></span></div></h3>
        <ul>
          <li className="footer-li"><a href="/">FAQ</a></li>  
          <li className="footer-li"><a href="/">Supports</a></li>  
          <li className="footer-li"><a href="/">Questions</a></li>  
        </ul>
        </div>
        <div className="footer-col">
        <h3>Offices<div className="underline"><span></span></div></h3>
        <ul>
          <li className="footer-li"><a href="/">Ghana</a></li>  
          <li className="footer-li"><a href="/">Europe</a></li>  
          <li className="footer-li"><a href="/">Canada</a></li>  
        </ul>
        </div>

        <div className="footer-col">
        <h3>Link<div className="underline"><span></span></div></h3>
        <ul>
          <li className="footer-li"><a  className="footer-link" href="/">home</a></li>  
          <li className="footer-li"><a className="footer-link" href="/">services</a></li>  
          <li className="footer-li"><a className="footer-link" href="/">products</a></li>  
          <li className="footer-li"><a className="footer-link" href="/">contact us</a></li>  
        </ul>
        </div>
        </div>
    <div className="footer-row-2">
  <div className="footer-col-2">   
  <div className="SocialIcons">
    <a className="SocialIconLink" href="/" target="_blank" aria-label="facebook" rel="noopener noreferrer">
                    <FaFacebookF/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
                    <FaPinterest/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitter/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                    <FaYoutube/>
                </a>
                <a className="SocialIconLink" href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                    <FaLinkedinIn/>
                </a> 
                </div> 
            </div>
            <div className="footer-col-2">
            <a className="chat-link" href="/">Let's chat <FaArrowRight/></a>
            </div>
    </div>
        <hr/>
        <p className="copy-right">&copy; 2021 Desy Scott, Inc. All Rights Reserved</p>
        </div>   
</IconContext.Provider>
        </>
    )
}

export default Footer;