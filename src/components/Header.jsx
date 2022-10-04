import React, { useState, useEffect } from "react"
import './css/header.scss'

export default function Header(){
    const [online, setOnline] = useState(null);
    const [playersOnline, setPlayersOnline] = useState(null);
    const [maxPlayers, setMaxPlayers] = useState(null);
    useEffect(() => {
        const interval = setInterval(async ()=>{
            await fetch(`https://api.minetools.eu/ping/mc.pandacraftserver.es/25565`)
                .then(res => res.json())
                .then(res => {
                    setOnline(!('error' in res))
                    if(online){
                        setPlayersOnline(res.players.online)
                        setMaxPlayers(res.players.max)
                        return
                    }
                })
            } , 10000);
        return () => clearInterval(interval);
    }, [online, setMaxPlayers, setOnline, setPlayersOnline]);
    return(
        <header>
            <div className="m-50-l m-50-r flex center-y p-rel">
                <a className="block img-logo" href="/PandaCraftWeb/docs/">
                    <img src="./img/logo.png" alt="LOGO" id="logo" />
                </a>
                <a className="block s-logo" href="/PandaCraftWeb/docs/">
                    <span className="turquoise-color"> Panda</span>
                    <span className="lightyellow-color">Craft</span>
                </a>
                <div className="self-end grid p-abs r-0 card">
                    <span className="in-txt"></span>
                    <div className="row">
                        <div className="col w-600">
                            mc.pandacraftserver.es
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={online?"online":"offline"}>{online?"online":"offline"}</div>
                        </div>
                    </div>
                    {online ?
                        <div className="row">
                            <div className="col">{playersOnline} / {maxPlayers} players</div>
                        </div>
                    : ''
                    }
                </div>
            </div>
        </header>
    )
}