import React,{useState,useEffect} from 'react' 
import {IconContext} from "react-icons"
import { FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-router-dom"
import {NavLogoIcon,SideDropDownIcon,MobileIcon} from "../iconsElement"
import "./Nav.css"



import Button from "../Button";
import DropDown from '../DropDown';


const  Navbar = () => {
  //state of the scroll set initially to false
    const[scroll,setScroll] = useState(false)
    const [click,setClick]= useState(false)    
    //state to show the dropdown Menu component, initially set to false
    const [showDropDown,setShowDropDown]= useState(true)
  
    const ChangeNavBackground = () => {
        if(window.scrollY >= 100){
            setScroll(true)
        }else{
            setScroll(false)
        }
        console.log(window.scrollY )
    }
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const MouseHover = () => {
        if (window.innerWidth > 960) {
          setShowDropDown(true);
        } else {
          setShowDropDown(false);
        }
      };

    const MouseLeave = () => {
        if (window.innerWidth > 960) {
          setShowDropDown(false);
        } else {
          setShowDropDown(false);
        }
      };
    

    useEffect(() => {
         window.addEventListener("scroll",ChangeNavBackground)
    }, []);

    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
         <nav className={scroll ? "nav-bar active": "nav-bar"}>
                 <Link  className ="nav-logo" to='/'>epic<NavLogoIcon/></Link>
              
                 <MobileIcon onClick={handleClick}>
                 {click ? <FaTimes/>:<FaBars/>}
                 </MobileIcon> 
                 <ul className={click ? "nav-menu active":"nav-menu"}>
                     <li  className="nav-item">
                     <Link className="nav-link" to="/" onClick={closeMobileMenu} activeStyle>home</Link>
                     </li>
                     <li  className="nav-item" onMouseEnter={MouseHover} onMouseLeave={MouseLeave}  >
                     <Link className="nav-link" to="/services" onClick={closeMobileMenu} activeStyle>Service<SideDropDownIcon/></Link>
   {/* This condition says that if the DropDown component  State is set to true it will display,if false it will not show */}
                     {showDropDown && <DropDown/>}
                     </li>
                     <li  className="nav-item">
                     <Link className="nav-link" to="/products" onClick={closeMobileMenu} activeStyle>products</Link>
                     </li>
                     <li  className="nav-item">
                     <Link className="nav-link" to="/contact-us" onClick={closeMobileMenu} activeStyle>contact us</Link>
                     </li>
                     <li  className="nav-item">
                     <Link className="nav-mobile-link" to="/sign-up" onClick={closeMobileMenu} activeStyle>sign up</Link>
                     </li>
                 </ul> 
                 <Button/>    
         </nav> 
         </IconContext.Provider>
        </>
    )
}

export default Navbar

