import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png';
export default function Navigation(props){

    return(
        <div>
            <div className="container-nav">
                <div className="flex-nav">
                    <div className="logo">
                        <img alt='logo' src={logo}/>
                    </div>
                    <div className="align-nav">
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </div>
                </div>
            </div>
        </div>
    )
}