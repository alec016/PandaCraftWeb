/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from 'react'

import NavBarA from './NavBarA'
import * as bcryptjs from "bcryptjs";
var salt = '$2a$10$t5WteFsEdjhsgcu/zUHTNe';

export default function Staff(props) {
    const name = useRef()
    const userRef = useRef();
    const passRef = useRef();
    const passRef2 = useRef();
    const emailRef = useRef();

    const registrar = async () => {
        if(passRef.current.value !== passRef2.current.value) return
        let pass = passRef2.current.value
        var hash = bcryptjs.hashSync(pass, salt);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: userRef.current.value,
                pass: hash,
                email: emailRef.current.value
            })
        };
        await fetch('http://localhost:3001/api/user/post', requestOptions)
            .then(response => response.json())
            .then(data => {
                
            });
    }
    document.title = "PandaCraft | Staff";

    return(
        <div>
            <NavBarA/>
            <div className='p'>
                <form className='card-p grid'>
                    <div id="staff" className="col">
                        <div className="row user-box">
                            <input type="text" name="userL" id="userL" required ref={name}/>
                            <label htmlFor="userL">Nombre Staff</label>
                        </div>
                        <div className="row">
                            <a onClick={registrar}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Registrar Staff Account
                            </a>
                        </div>
                        <div id="error" className='row user-box'>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}