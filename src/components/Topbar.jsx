import React from 'react'
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { Route, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../assets/css/topbar.css';
import whitelogo from '../assets/images/whitelogo.png'

class Topbar extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }
  openBox = () => {
    this.setState({
      isOpen: true
    })
  }

  closeBox = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
  return (
    <div className="topbar">
      <div className="logocontainer">
        <a href="/">
        <img className="logo" src={whitelogo} alt="logo" />
        </a>
      </div>
      <div className="timecontainer">
        <a href="/aboutus">
        <button className="navbutton">
            ABOUT US
        </button>
        </a>
        &nbsp;&nbsp;
        <a href="/github">
        <button className="navbutton">
            GITHUB
        </button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="contactbutton" onClick={this.openBox}>
            CONTACT US
        </button>
       
      </div>

      <div>
        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth='50%'
              headerBackgroundColor='#1e0040'
              closeButtonColor='white'
              bodyBackgroundColor='#1e0040'
              bodyTextColor='#fff'
              bodyHeight='500px'
              className="dialog">
              <button className='dialog-close' onClick={this.closeBox}><AiOutlineArrowRight size={20}/></button>
              <div>
                <h3>Hey We Are still in the works, but you can send us a message!</h3>
                <label htmlFor="">First name</label><br />
                <input className='dialog-input' type="text" placeholder='Enter your first name' />
                <br />
                <label htmlFor="">Last name</label><br />
                <input className='dialog-input' type="text" placeholder='Enter your Last name' />
                <br />
                <label htmlFor="">Email address</label><br />
                <input className='dialog-input' type="text" placeholder='Enter your Email Address' />
                <br />
                <label htmlFor="">Tell us what you need help with</label><br />
                <textarea className='dialog-textarea'></textarea>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    </div>
  )
}
}

export default Topbar