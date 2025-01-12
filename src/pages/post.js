import React from "react";
import { Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import { useParams } from 'react-router-dom';
import Layout from "../components/layout";
import postlist from "../posts.json";
import "./pages.css"

function Post(props) {
    const { id } = useParams();
    const validID = parseInt(id)
    if (!validID) {
        return <Navigate to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validID === post.id) {
            fetchedPost.title = post.title ? post.title : "Not title"
            fetchedPost.date = post.date ? post.date : "Not date"
            fetchedPost.author = post.author ? post.author : "Not author"
            fetchedPost.content = post.content ? post.content : "Not title"
            postExists = true
        }
    })
    if (postExists === false) {
        return <Navigate to="/404" />
    }
    return (
        <Layout>
            <div className="post">
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr />
                <Markdown children={fetchedPost.content} />
            </div>
        </Layout>
    )
}

export default Post