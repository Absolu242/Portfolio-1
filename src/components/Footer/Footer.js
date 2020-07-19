import React, { Component } from 'react'
import './Footer.css'
import {FiHeart} from 'react-icons/fi'

export default class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='Footer-content'>
                    <p>Code with <span><FiHeart/></span> by Rahan </p>
                </div>
            </div>
        )
    }
}