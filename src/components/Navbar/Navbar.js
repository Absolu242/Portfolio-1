import React, { Component } from 'react'
import './main.css'
import img from "./img/nat-9.jpg"
import {AiFillLinkedin} from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go';
import {IoMdMail} from 'react-icons/io';
export default class Navbar extends Component {
    render() {
        return (
            <div>
               <div className='Navbar'>
                <div className="header__group">
                    <div className="header__group--left">
                            <div className="left--img">
                                <img src={img} alt=""/>
                            </div>
                            <div className="left--text">
                                <h1>Rahan Bouess</h1>
                            </div>
                    </div>

                <div className="header__group--right">
                    <div className="right--btn --join">
                        <p>Hire me</p>
                    </div>

                    <div className="right--btn --msg">
                        <span><a href="#"><AiFillLinkedin/></a></span>
                    </div>

                    <div className="right--btn --more">
                       
                    <span>  <a href="#"> <GoMarkGithub/> </a></span>
                    </div>
                    <div className="right--btn --more">
                       <span> <a href="#"> <IoMdMail/> </a></span>
                    </div>
                </div>
            </div>  
               </div>
            </div>
        )
    }
}