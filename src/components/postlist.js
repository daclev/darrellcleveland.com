import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import postlist from "../posts.json"
import "./components.css"

function Postlist() {
    const excerptList = postlist.map(post => {
        return (
            post.content.split(" ").slice(0, 24).join(" ")
        )
    })
    return (
        <div className="postlist">
            <h1 className="title">Blog Posts</h1>
            {postlist.length &&
                postlist.map((post, i) => {
                    return (
                        <div key={i} className="post-card">
                            <h2><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr />
                            <Markdown children={excerptList[i]} />
                            <small><Link className="links" to={`/post/${post.id}`}>Read more ...</Link></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Postlist