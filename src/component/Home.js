import React from "react";
import cat from "../images/cat.svg"
import BlogPreview from "./BlogPreview";
import "./Home.css"

export default function Home() {
   
    return (
        <body>
            <div className="container">
                <section> 
                    <img src={ cat } alt="tree"></img>
                    <h1 className="intro-text">Hi, My name is Taylor Ishimoto.</h1>
                    <p className="subhead"> But, because we are friends, you can call me Kiku. </p>
                </section>
            </div>
            <div className="about-container">
                <div className="container">
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
            <div className="blog-container">
                <div className="container">
                    <h2>While you are here, you might as well check out my blog.</h2>
                    <ul>
                        <BlogPreview />
                    </ul>
                </div>
            </div>
        </body>
    )
} 