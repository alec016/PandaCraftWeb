/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from 'react'

import NavBarA from './NavBarA'

import './css/staff.scss'

const error = document.getElementById('error')
export default function Staff(props) {
    const name = useRef()
    const rank = useRef()

    const registrar = async () => {
        if(name.current.value === '' | undefined | null) return
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.current.value,
                rank: rank.current.value
            })
        };
        await fetch('http://localhost:3001/api/staff/post', requestOptions)
            .then(response => {
                window.location.reload()
            }).catch(err => {
                error.innerHTML =`<span style="color: red">${err.message}</span>`
            })
    }
    document.title = "PandaCraft | Staff";

    return(
        <div>
            <NavBarA/>
            <div className='p'>
                <form className='card-p grid'>
                    <div id="staff" className="col">
                        <div className="row p-title">
                            <span>Registrar Nuevo Staff</span>
                        </div>
                        <div className="row user-box">
                            <input type="text" name="userL" id="userL" required ref={name}/>
                            <label htmlFor="userL">Nombre Staff</label>
                        </div>
                        <div className='row user-box'>
                            <select name="rank" id="rank" required ref={rank}>
                                <option value="Selecciona" defaultChecked>Selecciona</option>
                                <option value="Owner">Owner</option>
                                <option value="Admin">Admin</option>
                                <option value="Sr.Mod">Sr.Mod</option>
                                <option value="Mod">Mod</option>
                                <option value="Helper">Helper</option>
                                <option value="Configurador">Configurador</option>
                            </select>
                        </div>
                        <div className="row">
                            <a onClick={registrar}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Registrar Staff
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