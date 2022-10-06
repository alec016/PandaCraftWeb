import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faTiktok, faDiscord, faTwitch } from '@fortawesome/free-brands-svg-icons'
import './css/footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>Compañia</h4>
                        <ul>
                            <li>
                                <Link to="/PandaCraftWeb/docs/about">Sobre nosotros</Link>
                            </li>
                            <li><a href="/PandaCraftWeb/docs/services">Nuestros servicios</a></li>
                            <li><Link to="/PandaCraftWeb/docs/privacy">Política de privacidad</Link></li>
                            <li><a href="/PandaCraftWeb/docs/affiliate">Programa de afiliación</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Obtén ayuda</h4>
                        <ul>
                            <li><a href="/PandaCraftWeb/docs/faq">FAQ</a></li>
                            <li><a href="/PandaCraftWeb/docs/shipping">shipping</a></li>
                            <li><a href="/PandaCraftWeb/docs/returns">returns</a></li>
                            <li><a href="/PandaCraftWeb/docs/order">order status</a></li>
                            <li><a href="/PandaCraftWeb/docs/payments">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#watch">watch</a></li>
                            <li><a href="#bag">bag</a></li>
                            <li><a href="#shoes">shoes</a></li>
                            <li><a href="#dress">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a alt="discord server" href="http://discord.gg/Dr7RKcmwuF">
                                <FontAwesomeIcon icon={faDiscord} title="discord server" />
                            </a>
                            <a alt="twitter" href="https://twitter.com/PandaCraftSV?s=20&t=90IfIwHCEhrikWhcMqoY2g">
                                <FontAwesomeIcon icon={faTwitter} title="twitter" />
                            </a>
                            <a alt="instagram" href="https://www.instagram.com/pandacraftsv/">
                                <FontAwesomeIcon icon={faInstagram} title="instagram" />
                            </a>
                            <a alt="tiktok" href="https://www.tiktok.com/@pandacraftsv">
                                <FontAwesomeIcon icon={faTiktok} title="tiktok" />
                            </a>
                            <a alt="twitch" href="https://www.twitch.tv/patakyhd">
                                <FontAwesomeIcon icon={faTwitch} title="twitch" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>CopyRight: 2022 - {new Date().getFullYear()} ©</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}