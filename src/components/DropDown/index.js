import React,{useState} from 'react'
import {DropDownItems} from "./DropDownItems"
import {Link} from "react-router-dom"
import "./DropDown.css"

function DropDown() {
    const [click,setClick] = useState(false)
  
    //function to toggle the state of the dropdown menu when it been click on 
    const handleClick=()=>{
      setClick(!click)
    }
    const closeDropDownMenu =()=>{
      setClick(false)
    }
    return (
        <>
        <ul onClick={handleClick} className={click? "dropdown-menu clicked":"dropdown-menu"}>
        {DropDownItems.map((item,index)=>{
            return(
            <li key={index} >
              <Link to={item.path} className={item.cName} onClick={closeDropDownMenu}>
              {item.title}
              </Link>
            </li>
            )
        })}
        </ul>
        </>
    )
}

export default DropDown
