import React, { useEffect } from 'react'
import './css/profile.scss'

const datos = document.getElementById('datos')
export default function Rating(props){

    const html = async () => {
        let data = '';
        await fetch('http://localhost:3001/api/staff/getAll')
        .then(res => res.json())
        .then(res => {
            if(res.length === 0) {
                datos.innerHTML ='<span style="color: red">No hay datos para mostrar</span>'
                return
            }
            for(let ob of res){
                for(let k in ob){
                    if(k === 'pass') continue
                    data += k + ': '
                    if(k === 'rating'){
                        data +='{'
                        for(let j in ob[k]){
                            if(j === 'rated'){
                                data += j + ': ' + Boolean(k[j]) + ', '
                                continue
                            }
                            data += j + ': ' + k[j] + ', '
                        }
                        data+='}<br/>'
                        continue
                    }
                    data += ob[k] + '<br/>'
                }
            }
            datos.innerHTML = data
        }).catch(err => {
            datos.innerHTML =`<span style="color: red">${err.message}</span>`
        })
    }

    /*const rate = async () => {
        const result = await fetch('http://localhost:3001/api/user/update/' + user.id)
        .then(res => res.json())
        .then(res => {

        })
    }*/

    useEffect(() => {
        const interval = setInterval(html, 10*1000)
        return () => clearInterval(interval);
    }, []);

    

    return(
        <div className='subcard grid w-100-p'>
            {props.user?.userPermision === 4 ? 
            <div className='col w-100-p'>
                <div className='row'>
                    <div id="datos"></div>
                    <a href="profile/staff">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Añadir staff
                    </a> 
                    <a href="profile/staff/ccount">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Añadir usuario staff
                    </a> 
                </div>
            </div> : ''}
        </div>
    )
}