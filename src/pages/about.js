import React from "react";
import Markdown from "react-markdown";
import aboutText from "../pages.json"
import Layout from "../components/layout";

function About() {
    return (
        <Layout >
            <div className="page-content">
                <Markdown children={aboutText[0].content} />
            </div>
        </Layout>
    )
}

export default About