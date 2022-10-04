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
                                <Link to="/about">Sobre nosotros</Link>
                            </li>
                            <li><a href="services">Nuestros servicios</a></li>
                            <li><Link to="/privacy">Política de privacidad</Link></li>
                            <li><a href="affiliate">Programa de afiliación</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Obtén ayuda</h4>
                        <ul>
                            <li><a href="faq">FAQ</a></li>
                            <li><a href="shipping">shipping</a></li>
                            <li><a href="returns">returns</a></li>
                            <li><a href="order">order status</a></li>
                            <li><a href="payments">payment options</a></li>
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
                            <a href="http://discord.gg/Dr7RKcmwuF">
                                <FontAwesomeIcon icon={faDiscord} />
                            </a>
                            <a href="https://twitter.com/PandaCraftSV?s=20&t=90IfIwHCEhrikWhcMqoY2g">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/pandacraftsv/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.tiktok.com/@pandacraftsv">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="https://www.twitch.tv/patakyhd">
                                <FontAwesomeIcon icon={faTwitch} />
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