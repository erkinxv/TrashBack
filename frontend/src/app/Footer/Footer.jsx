import React from 'react'
import "./Footer.css"
import Main from "../../images/Vector.svg"
import use from "../../images/Question Mark.svg"
import Qr from "../../images/Group 6.svg"
import history from "../../images/Future.svg"
import profile from "../../images/Male User.svg"



function Footer() {
  return (
    <>
     <div className='footer'>
        <button className='mainButton'><img src={Main} alt="" /></button>
        <button className='howToUse'><img src={use} alt="" /></button>
        <div className='circle-container'><button className='QR'><img src={Qr} alt="" /></button></div>
        <button className='history'><img src={history} alt="" /></button>
        <button className='profile'><img src={profile} alt="" /></button>
     </div>
    </>
  )
}

export default Footer