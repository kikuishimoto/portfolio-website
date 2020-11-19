import React from 'react';
export default function BlogCard(props) {
    return (
        <li>
            <div className="blog-card">
                <img src={props.image}/>
                <h4> {props.title} </h4>
                <h5> <a href={props.link}> See blog ➤</a></h5>
            </div>
        </li>
    )
}