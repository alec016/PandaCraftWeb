import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import StaffCard from './StaffCard';
import './css/profile.scss'

export default function Rating(props){
    const user = props.user;
    const datos = document.getElementById('datos')
    /*const rate = async () => {
        const result = await fetch('http://localhost:3001/api/user/update/' + user.id)
        .then(res => res.json())
        .then(res => {

        })
    }*/
    const [staffs, setStaffs] = useState([])
    const [rate, setRate] = useState({});

    const vote = async () => {
        await fetch('http://localhost:3001/api/staff/update/', {
            method: 'PATCH',
            body: JSON.stringify({
                rank: rate.staffRated.rank,
                name: rate.staffRated.name,
                rating: {
                    rates: {
                        _1: rate.rate === 1 ? 1 : 0,
                        _2: rate.rate === 2 ? 1 : 0,
                        _3: rate.rate === 3 ? 1 : 0,
                        _4: rate.rate === 4 ? 1 : 0,
                        _5: rate.rate === 5 ? 1 : 0,
                        total: 1
                    }
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(res => {

        }).catch(err => {
            datos.innerHTML =`<span style="color: red">${err.message}</span>`
        })
        await fetch('http://localhost:3001/api/user/update/', {
            method: 'PATCH',
            body: JSON.stringify({
                userName: user.userName,
                rating: {
                    rated: true,
                    day: Date.now(),
                    staff: rate.staffRated,
                    rating: rate.rate
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(res => {

        }).catch(err => {
            datos.innerHTML =`<span style="color: red">${err.message}</span>`
        })
        
        await fetch('http://localhost:3001/api/comment/post/', {
            method: 'PATCH',
            body: JSON.stringify({
                user: user,
                comment: rate.comment
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(res => {

        }).catch(err => {
            datos.innerHTML =`<span style="color: red">${err.message}</span>`
        })
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            await fetch('http://localhost:3001/api/staff/getAll')
            .then(res => res.json())
            .then(res => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                let array = []
                let cont = 1;
                if(res.length === 0) {
                    datos.innerHTML ='<span style="color: red">No hay datos para mostrar</span>'
                    return
                }
                for(let ob of res){
                    array.push(<StaffCard number={cont} staff={ob} user={user} rate={setRate}/>);
                    cont++
                }
                setStaffs(array)
                console.log(staffs)
            }).catch(err => {
                datos.innerHTML =`<span style="color: red">${err.message}</span>`
            })
        }, 10*1000, 5*1000)
        return () => clearInterval(interval);
    }, [datos, staffs, user, setStaffs]);

    

    return(
        <div className='subcard grid w-100-p' id="rating">
            {props.user?.userPermision === 4 ? 
            <div className='col w-100-p'>
                <div className='row' id="staffCards">
                    <div id="datos" className='text-S'>{staffs}</div>
                    <div className='enlaces'>
                        <a href="./profile" className="buttonVoto" onClick={vote}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Votar
                        </a> 
                        <Link to="staff">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Añadir staff
                        </Link> 
                        <Link to="staff/account">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Añadir usuario staff
                        </Link> 
                    </div>
                </div>
            </div> : ''}
        </div>
    )
}