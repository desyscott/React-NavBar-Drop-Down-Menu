import React from 'react'
import {NavLink} from "react-router-dom"
import  "./Button.css"

function Button() {
    return (
        <>
           <NavLink to="/sign-up">
           <button className="btn primary-btn">sign up</button>
            </NavLink> 
        </>
    )
}

export default Button
