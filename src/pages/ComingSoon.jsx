import React from 'react'
import HomeText from '../components/HomeText'
import Footer from '../components/Footer'
import Countdown from '../components/Countdown'
import '../assets/css/style.css'

const ComingSoon = () => {
  return (
    <div className='section'>
      <HomeText />
      <Countdown />
      <Footer />
    </div>
  )
}

export default ComingSoon