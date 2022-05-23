import React from 'react'

const Countdown = () => {
  return (
    <div>
        <div className='countdown'>
            <h1><b>7</b></h1>
            <b>Days</b>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className='countdown'>
            <h1><b>24</b></h1>
            <b>Hours</b>
        </div>
        <div className='countdown'>
            <h1><b>54</b></h1>
            <b>Minutes</b>
        </div>
        <div className='countdown'>
            <h1><b>11</b></h1>
            <b>Seconds</b>
        </div>

        <div className='input'>
            <input className='input-name' type="text" placeholder='First Name...' />
            <input className='input-name' type="text" placeholder='Last Name...' />

            <input className='input-email' type="email" placeholder='Enter your email address' />
            <button className='input-button'>JOIN OUR WAITING LIST</button>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Countdown