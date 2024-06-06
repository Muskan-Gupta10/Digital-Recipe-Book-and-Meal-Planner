import React from 'react'
import '../styles/landingPage.css'
import bg from '../Assets/landingImgSmall.png'
function landingPage() {
  return (
    <div className='landingContainer'>
        <nav className='nav'>
            <ul className="navList navrow">
            <div className="navItems">
            <li className="logo"></li>
            </div>
            <div className="registerLinks navrow">
                <li className="navItems login">Login</li>
                <li className="navItems signup">Signup</li>
            </div>
            </ul>
        </nav>
        <div className="landingContent">
            <div className="Hero  row">
                <div className="landingCol c1">
                    <h2>Nourish and Delight: Your Personel Meal Journey</h2>
                    <p>Welcome to our digital meal planner and recipe heaven</p>
                </div>
                <div className="landingCol  c2">
                    <img src={bg} alt="" />
                </div>
            </div>
            <div className="buttons">

                <span className='login'>Login</span>
                <span className='signup'>Signup</span>
            </div>
        </div>
    </div>
  )
}

export default landingPage