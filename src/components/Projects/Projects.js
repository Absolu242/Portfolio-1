import React, { Component } from 'react'
import Project from '../Project/Project'
import axios from 'axios'
import './Projects.css'

export default class Projects extends Component {
    state={
        store:[]
    }

    componentDidMount(){
        fetch('http://localhost:8000/Projects')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    store:data
                });
            }) 
        }
    

    render() {
        const content = this.state.store
        return (
            <div className='Projects'>
            <div className='Projects-content'>
                <div className='menu'>
                    <h2>My Work</h2>
                    <div className='filter'>
                        <button>Blog</button>
                        <button>E-commerce</button>
                        <button>Portfolio</button>
                    </div>
                </div>
            <div className='works'>
                <div className='works-content'>{content.map(i => <Project key={i.id} info={i}/>)}
            </div>
             </div>
               
            </div>
        </div>
        )
    }
}