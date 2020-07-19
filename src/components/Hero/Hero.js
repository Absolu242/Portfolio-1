import React, { Component } from 'react'
import './Hero.css'
export default class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='hero-content'>
                    <div>
                        <p>Sunday, November 5</p>
                        <span>
                        <input type='text' placeholder='What are you looking for ?'/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}