import React from "react";
import { Link } from "react-router-dom";
import './css/navA.scss'

export default function NavBarA(){
    return (
        <nav className="nav-containerA">
            <div className="nav-tabsA">
                <Link to="/">
                    <input type="radio" id="radio-1" name="nav-tabsA"/>
                    <label className="nav-tabA" htmlFor="radio-1">Home
                        <span className="nav-notificationA">5</span>
                    </label>
                </Link>
                <Link to="/privacy">
                    <input type="radio" id="radio-2" name="nav-tabsA"/>
                    <label className="nav-tabA" htmlFor="radio-2">Privacy policity</label>
                </Link>
                <Link to="/profile">
                    <input type="radio" id="radio-3" name="nav-tabsA" defaultChecked/>
                    <label className="nav-tabA" htmlFor="radio-3">Profile</label>
                </Link>
                <span className="nav-gliderA"></span>
            </div>
        </nav>
    )
}