import React from 'react'
import './Project.css'

export default function Project({info}) {
    const {name,date,tech,type,category,color}= info;
    return (
        <div className='Project'>
            <div className='Project-content'>
                <div className='top'>
                <span className='category' style={{backgroundColor:`${color}`}}><p>{category}</p></span>
                <span className='type' style={{backgroundColor:'#eff7f6'}}><p>{type}</p></span>
                </div>
                <div className='main'>
                    <h1>{name}</h1>
                </div>
                <div className='date'>
                   <p> {date}</p>
                </div>
                <div className='tech'>
                    {tech.map((techno,i) => <span key={i}>{techno}</span>)}
                </div>
            </div>
            
        </div>
    )
}
