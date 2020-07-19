import React, { Component } from 'react'
import './FileSection.css'
import {FaCloudDownloadAlt} from 'react-icons/fa';
import {FiFileText} from 'react-icons/fi';

export default class FileSection extends Component {
    render() {
        return (
            <div className='File'>
                <div className='File-content'>
                    <div className='File-content-top'>
                       <h2> My Documents</h2>
                    </div>
                    <div className='File-content-main'>
                       <div className='File-content-item'>
                           <h3>My Resume</h3>
                           <a href="#"><FaCloudDownloadAlt/> Download here</a>
                       </div>

                       <div className='File-content-item'>
                           <h3>My Degree</h3>
                           <a href="#"><FiFileText/> Have a Look here</a>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}