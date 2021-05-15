import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';
export default function Navigation(props){

    return(
        <div>
            <div className="container-nav">
                <div className="flex-nav">
                    <div className="logo">
                        <img alt='logo' src={logo} style ={{cursor:'pointer'}}/>
                    </div>
                    <div className="align-nav">
                        <li><Link to="/login">Change Room</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </div>
                </div>
            </div>
        </div>
    )
}