import React from "react";
import NavBarGeneral from './NavBarGeneral'
import '../index.css';
import './css/about.scss'

export default function About(){
    document.title = "PandaCraft | About Us";
    return(
        <div>
            <NavBarGeneral/>
            <div className='a'>
                <div className="a-title">

                </div>
                <div className="a-text">
                    
                </div>
            </div>
        </div>
    )
}