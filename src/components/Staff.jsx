/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef} from 'react'

import NavBarA from './NavBarA'

const error = document.getElementById('error')
export default function Staff(props) {
    const name = useRef()

    const registrar = async () => {
        if(name.current.value === '' | undefined | null) return
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.current.value
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