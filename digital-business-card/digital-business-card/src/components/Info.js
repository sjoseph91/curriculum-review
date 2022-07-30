import React from "react";
import pic from "../sequoia.jpg"

export default function Info(){
    return (
        <>
        <div className="imgContainer">
            <img className="profile-pic" src={pic} alt="profile-pic" />
        </div>
        <h1 className="name">Sean Joseph</h1>
            <h3>Web Developer</h3>
            <p>https://github.com/sjoseph91</p>
            <div className="contact">
                <a className="email" href="www.email.com"><i></i>Email</a>
                <a className="linkedin" href="www.linkedin.com"><i></i>LinkedIn</a>
            </div>
        </>
    )
}