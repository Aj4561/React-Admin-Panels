import React from "react";
import './Card.css'


export default function GraphicCard() {
    return (
        <>
                    <div className="per-card-3">
                        <div className="card-image">
                            <span></span>
                            <img src="https://www.dropbox.com/s/hdwp9fet5mfcd6x/girl-919048_640.jpg?raw=1" alt="profile"/>
                            <span className="per-name">Nikki Thomas</span>
                        </div>

                        <div className="card-content">
                            <span className="per-position">Project Manager</span>
                            <div className="card-text">
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                            </div>
                            <div className="social-icons">
                                <i className="fab fa-linkedin-in" title="LinkedIn"></i>
                                <i className="fab fa-twitter" title="Twitter"></i>
                                <i className="far fa-envelope" title="E-Mail"></i>
                                <i className="fab fa-facebook-f" title="Facebook"></i>
                                <i className="fab fa-whatsapp" title="WhatsApp"></i>
                                <div className="card-btn">
                                    <button type="button" title="Connect">Connect</button>
                                </div>                                
                            </div>
                        </div>                  
                    </div>
        </>
    )
}