import React from "react";
import { Link } from "react-router-dom";
import './css/navP.scss'

export default function NavBar(){
    return (
        <nav className="nav-containerP">
            <div className="nav-tabsP">
                <Link to="/">
                    <input type="radio" id="radio-1" name="nav-tabsP"/>
                    <label className="nav-tabP" htmlFor="radio-1">Home
                        <span className="nav-notificationP">5</span>
                    </label>
                </Link>
                <Link to="/privacy">
                    <input type="radio" id="radio-2" name="nav-tabsP" defaultChecked/>
                    <label className="nav-tabP" htmlFor="radio-2">Privacy policity</label>
                </Link>
                <Link to="/profile">
                    <input type="radio" id="radio-3" name="nav-tabsA"/>
                    <label className="nav-tabA" htmlFor="radio-3">Profile</label>
                </Link>
                <span className="nav-gliderP"></span>
            </div>
        </nav>
    )
}