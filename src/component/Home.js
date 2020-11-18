import React from "react";
import home from "../images/home.svg"
import "./Home.css"

export default function Home() {
    return (
        <body>
            <div class="container">
                <section> 
                    <img src={ home } alt="tree"></img>
                    <h1 class="intro-text">Hi, My name is Taylor Ishimoto.</h1>
                    <p class="subhead"> But, because we are friends, you can call me Kiku. </p>
                </section>
            </div>
            <div class="about-container">
                <div class="container">
                    <ul>
                        <li>
                            <img></img>
                            <p>A front-stack devloper writing each line of code with care and love </p>

                        </li>
                        <li>
                            <img></img>
                            <p> A creative, making innovative and user friendlly designs to ensure eay access for everyone.</p>
                        </li>
                        <li>
                            <img></img>
                            <p>A student, always dedicated to learning and improving</p>
                        </li>
                        <li> 
                            <img></img>
                            <p>learn more!</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="blog-container">
                <div class="container">
                    <h2>While you are here, you might as well check out my blog.</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </body>
    )
} 