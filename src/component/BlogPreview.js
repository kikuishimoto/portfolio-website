import React, {useState, useEffect} from 'react';
import BlogCard from './BlogCard';
export default function BlogPreview() {
    const [blogPosts, setBlogPosts] = useState("[]")

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kikucodes")
        .then(res => res.json())
        .then(res => {
            debugger
            setBlogPosts(res.items)
        })
        

    })
    if (blogPosts.length) {
        let posts = blogPosts.slice(0,3);
        return posts.map((post) => {
            return <BlogCard title={post.title} image={post.image} link={post.link}/>
        }
           
        )
    }else {
        return <h1>Loading...</h1>
    }
    
}