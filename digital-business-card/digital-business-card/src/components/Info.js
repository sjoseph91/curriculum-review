import React from "react";
import pic from "../sequoia.jpg"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';


export default function Info(){
    return (
        <>
        <div className="imgContainer">
            <img className="profile-pic" src={pic} alt="profile-pic" />
        </div>
        <h1 className="name">Sean Joseph</h1>
            <h3 className="title">Web Developer</h3>
            <p className="website">https://github.com/sjoseph91</p>
            <div className="contact">
                <a className="email" href="www.email.com"><FaEnvelope />Email</a>
                <a className="linkedin" href="www.linkedin.com"><FaLinkedin />LinkedIn</a>
            </div>
        </>
    )
}
