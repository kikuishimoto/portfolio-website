import React from 'react';
import { link } from 'react-router-dom';
import logo from "../images/logo.svg"
import ham from "../images/ham.svg"
import exit from "../images/exit.svg"
import "./NavBar.css"

export default function NavBar() {
    return (
        <div class="container">
            <header>
                <img src= { logo } alt="logo" className="logo"/>
                <nav>
                    <a href="#" class="hide-desktop">
                        <img src={ ham } alt="toggle menu" class="menu" id="menu">
                        </img>
                    </a>
                    <ul class="show-desktop hide-mobile" id="nav">
                        <li id="exit" class="exit-btn hide-desktop"><img src={ exit } alt="exit menu"></img></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About me</a></li>
                    </ul>
                </nav>

            </header>
        </div>
    )
}