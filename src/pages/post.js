import React from "react";
import { Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
                <Markdown
    remarkPlugins={[remarkGfm]}
    components={{
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
                <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
    }}
>
    {processedContent}
</Markdown>
            </div>
        </Layout>
    )
}

export default Post