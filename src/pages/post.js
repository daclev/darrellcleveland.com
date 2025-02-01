import React from "react";
import { Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import { readingTime } from "reading-time-estimator";
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
    const readTime = readingTime(fetchedPost.content).text;
    const processedContent = fetchedPost.content.replace(
        /!\[(.*?)\]\((.*?)\)/g,
        (match, alt, src) => {
            try {
                const imagePath = require(`../assets/images/${src}`);
                return `![${alt}](${imagePath})`;
            } catch (error) {
                console.error("Image not found:", src);
                return match; 
            }
        }
    );
        return (
        <Layout>
            <div className="post">
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <br/>
                <small><em>{readTime}</em></small>
                <hr/>
                <Markdown children={processedContent} />
            </div>
        </Layout>
    )
}

export default Post