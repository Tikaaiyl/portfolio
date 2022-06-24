import React, { useEffect, useState } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {

    /* source for send email function from emailjs.com/docs/examples/reactjs/ */
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tsqm606', 'template_2x7fheo', form.current, 'aNZxN0D7qgtDKBZP3')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span> Get in Touch </span>
                    <span> Contact me </span>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contacting me"}</span>
                </form>
                <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Contact