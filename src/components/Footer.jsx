import React from 'react'
import { AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

import '../assets/css/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="icons-container">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AiFillYoutube className='icons' size={33} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AiFillFacebook className='icons' size={31}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AiFillInstagram className='icons' size={33} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AiFillLinkedin className='icons'  size={31} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AiFillTwitterSquare className='icons' size={31} />
        <br />
        <h4 className=''>
          <span className='text'>Terms of services</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='text'>Privacy Policy</span>
        </h4>
        <br />
        <span className='Copyright'>
          Copyright 2021 @ Peddle Technologies. All Rights Reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer