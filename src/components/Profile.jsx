/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react"
import NavBarA from './NavBarA' 
import Rating from './Rating'
import DatosUsuario from './DatosUsuario'
import '../index.css';
import './css/profile.scss'
import * as bcryptjs from "bcryptjs";
var salt = '$2a$10$t5WteFsEdjhsgcu/zUHTNe';

let ss = localStorage;
let sesion = false;
export default function Profile(){

    sesion = ss.getItem('sesion') ?? false;
    if(typeof sesion === 'string') sesion = true
    if(typeof sesion === 'boolean' && sesion) sesion = true

    const userRef = useRef();
    const passRef = useRef();
    const passRef2 = useRef();
    const userRef2 = useRef();
    const passRef3 = useRef();
    const emailRef = useRef();

    const [USER, setUser] = useState();

    const iniciar = async (u) => {

        await fetch(`http://localhost:3001/api/user/getOne/${u}`).then(res => res.json()).then(res => {
            sesion = true;
            setUser(res);
        })
    }

    const iniciarS = async () => {
        const value = {
            user: userRef.current.value,
            pass: bcryptjs.hashSync(passRef.current.value, salt)
        }
        // eslint-disable-next-line eqeqeq
        if(value.user == (undefined || null) || value.pass == (undefined || null)) return

        const response = await fetch(`http://localhost:3001/api/user/getOne/${value.user}`).then(res => res.json())
        console.log(response)
        if('error' in response) return

        bcryptjs.compare(value.pass, response.pass).then((res) => {
            ss.setItem("sesion", JSON.stringify(value))
            sesion = true;
            setUser(response);
        });
    }

    const register = async () => {
        // eslint-disable-next-line eqeqeq
        if(passRef3.current.value != passRef2.current.value) return
        let pass = passRef2.current.value
        var hash = bcryptjs.hashSync(pass, salt);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: userRef2.current.value,
                pass: hash,
                email: emailRef.current.value
            })
        };
        await fetch('http://localhost:3001/api/user/post', requestOptions)
            .then(response => response.json())
            .then(data => {
                mostrarS()
            });
    }
    const mostrarR = () => {
        const regis = document.getElementById("regis");
        regis.className = "col"
        const is = document.getElementById('is')
        is.className = 'col d-none'
    }
    const mostrarS = () => {
        const regis = document.getElementById("regis");
        regis.className = "col d-none"
        const is = document.getElementById('is')
        is.className = 'col'
    }
    useEffect(() => {
        const interval1 = setInterval(() => {
            if(sesion) {
                ss.removeItem("sesion")
                // eslint-disable-next-line react-hooks/exhaustive-deps
                sesion = false
                setUser(undefined)
            }
        }, 5*60*1000);
        const interval2 = setInterval(() => {
            if(USER === undefined){
                if(sesion && typeof ss.getItem('sesion') === 'string') {
                    console.log("user", new Date().toISOString())
                    iniciar(JSON.parse(ss.getItem('sesion')).user)
                }
            }
                
        }, 100)
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        }

    }, [USER, setUser]);
    document.title = "PandaCraft | Profile";

    return(
        <div>
            <NavBarA/>
            <div className='p'>
                {sesion 
                    ?   <div className="card-p grid">
                            <div id="profile" className="col">
                                <div className="row p-title">
                                    Bienvenid@ {USER?.userName ?? ''}!
                                    <Rating user={USER}/>
                                    <DatosUsuario user={USER}/>
                                </div>
                            </div>
                        </div>
                    :   <form id="form" className="card-p grid">
                            <div id="is" className="col">
                                <div className="row p-title">
                                    Iniciar Sesión
                                </div>
                                <div className="row user-box">
                                    <input type="text" name="userL" id="userL" required ref={userRef}/>
                                    <label htmlFor="userL">Usuario</label>
                                </div>
                                <div className="row user-box">
                                    <input type="password" name="passL" id="passL" required ref={passRef}/>
                                    <label htmlFor="passL">Contraseña</label>
                                </div>
                                <div className="row">
                                    <a onClick={iniciarS}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Iniciar Sesión
                                    </a>
                                    <a onClick={mostrarR}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Registrarme
                                    </a>
                                </div>
                            </div>
                            <div id="regis" className="col d-none">
                                <div className="row p-title">
                                    Registro
                                </div>
                                <div className="row user-box">
                                    <input type="text" name="user" id="userR" required ref={userRef2}/>
                                    <label htmlFor="user">Nombre de Usuario</label>
                                </div>
                                <div className="row user-box">
                                    <input type="email" name="email" id="emailR" required ref={emailRef}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="row user-box">
                                    <input type="password" name="pass" id="passR" required ref={passRef2}/>
                                    <label htmlFor="pass">Contraseña</label>
                                </div>
                                <div className="row user-box">
                                    <input type="password" name="pass2" id="passR2" required ref={passRef3}/>
                                    <label htmlFor="pass2">Repetir Contraseña</label>
                                </div>
                                <div className="row">
                                    <a onClick={mostrarS}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Iniciar Sesión
                                    </a>
                                    <a onClick={register}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Registrarme
                                    </a>
                                </div>
                            </div>
                            
                        </form>
                }
            </div>
        </div>
    )
}