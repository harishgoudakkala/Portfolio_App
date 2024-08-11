import { useState } from "react";
import React from "react";
import "../styles/contactMe.css";
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const apiKey = process.env.REACT_APP_API_KEY;
        e.preventDefault();
        emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }, apiKey).then(
            () => {
            },
            (error) => {
              console.log('FAILED...', error);
            },
        );
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }
    return (
        <section id="ContactMe">
            <h1 className="heading">Contact Me</h1>

            <div className="contact-wrapper">

                <form id="contact-form" className="form-horizontal" role="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value={formData.name} required onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value={formData.email} required onChange={handleInputChange} />
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" value={formData.message} required onChange={handleInputChange}></textarea>

                    <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div className="alt-send-button">
                            <span className="send-text">SEND</span>
                        </div>
                    </button>

                </form>

                <div className="direct-contact-container">

                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker"><span className="contact-text place">Hyderabad, Telangana</span></i></li>
                        <li className="list-item"><i className="fa fa-phone"><span className="contact-text phone"><a href="tel:+917032471195" title="Give me a call">+91 70324 71195</a></span></i></li>
                        <li className="list-item"><i className="fa fa-envelope"><span className="contact-text gmail"><a href="mailto:harishgoudakkala@gmail.com" title="Send me an email">harishgoudakkala@gmail.com</a></span></i></li>
                    </ul>

                    <div className="social-media-list">
                        <hr />
                        <ul>

                        <li><a href="https://github.com/harishgoudakkala" target="_blank"  >
                            <i className="fa-brands fa-github"></i></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/akkala-harish-goud-916bb1242/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <i className="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/_harish._007_" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <i className="fa-brands fa-instagram"></i></a>
                        </li>
                        <li><a href="https://x.com/_the__monarch_" target="_blank" rel="noopener noreferrer" className="contact-icon">
                            <i className="fa-brands fa-twitter"></i></a>
                        </li>
                        </ul>
                        <hr />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ContactMe;
