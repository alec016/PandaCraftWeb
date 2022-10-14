/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from 'react'

import NavBarA from './NavBarA'
import * as bcryptjs from "bcryptjs";
var salt = '$2a$10$t5WteFsEdjhsgcu/zUHTNe';

export default function Staff(props) {

    const userRef = useRef();
    const passRef = useRef();
    const passRef2 = useRef();
    const emailRef = useRef();

    const registrar = async () => {
        if(passRef.current.value !== passRef2.current.value) return
        let pass = passRef.current.value
        var hash = bcryptjs.hashSync(pass, salt);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: userRef.current.value,
                pass: hash,
                email: emailRef.current.value,
                userPermision: 4
            })
        };
        await fetch('http://localhost:3001/api/user/post', requestOptions)
            .then(response => response.json())
            .then(data => {
                window.location.replace('/PandaCraftWeb/docs/profile')
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
                            <input type="text" name="user" id="userR" required ref={userRef}/>
                            <label htmlFor="user">Nombre de Usuario</label>
                        </div>
                        <div className="row user-box">
                            <input type="email" name="email" id="emailR" required ref={emailRef}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="row user-box">
                            <input type="password" name="pass" id="passR" required ref={passRef}/>
                            <label htmlFor="pass">Contraseña</label>
                        </div>
                        <div className="row user-box">
                            <input type="password" name="pass2" id="passR2" required ref={passRef2}/>
                            <label htmlFor="pass2">Repetir Contraseña</label>
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