import React from "react";
import { Link } from "react-router-dom";
import './css/nav.scss'

export default function NavBar(){
    return (
        <nav className="nav-container">
            <div className="nav-tabs">
                <Link to="/PandaCraftWeb/docs/">
                    <input type="radio" id="radio-1" name="nav-tabs" defaultChecked/>
                    <label className="nav-tab" htmlFor="radio-1">Home
                        <span className="nav-notification">5</span>
                    </label>
                </Link>
                <Link to="/privacy">
                    <input type="radio" id="radio-2" name="nav-tabs"/>
                    <label className="nav-tab" htmlFor="radio-2">Privacy policity</label>
                </Link>
                <Link to="/profile">
                    <input type="radio" id="radio-3" name="nav-tabsA"/>
                    <label className="nav-tabA" htmlFor="radio-3">Profile</label>
                </Link>
                <span className="nav-glider"></span>
            </div>
        </nav>
    )
}