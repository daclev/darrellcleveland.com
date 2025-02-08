import React from "react";
import Layout from "../components/layout";
import "./pages.css"

function NotFound () {
    return (
        <Layout >
            <br/>
            <h1 className="notfound">
                The page you are looking for does not exist.
            </h1>
        </Layout>
    )
}

export default NotFound