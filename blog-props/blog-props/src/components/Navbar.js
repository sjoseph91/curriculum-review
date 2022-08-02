import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"

export default function Navbar(){
    return (
        <nav className='navbar'>
            <h3>Start Bootstrap</h3>
            <button className='navbar--menu'>Menu <AiOutlineMenu /></button>
            <div className="links">
                <a href="www.google.com">Home</a>
                <a href="www.google.com">About</a>
                <a href="www.google.com">Sample Post</a>
                <a href="www.google.com">Contact</a>
            </div>
        </nav>
    )
}