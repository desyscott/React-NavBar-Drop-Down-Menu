import React from 'react'
import "../components/Button"
import "../components/home.css"



function home() {
    return (
        <>
        <div className="home-container">
        <div className="hero-item">
       <h1>shop all you want</h1>
       <p>We've got unlimited things for you</p>
       <div className='hero-btn'>
       <button className="btn secondary-btn">Get started <i className="fas fa-arrow-right"/></button>
       </div>
        </div>
        </div>
        </>
       
    )
}

export default home
