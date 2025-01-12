import React from "react";
import Layout from "../components/layout"
import Postlist from "../components/postlist"
import "./pages.css"

function Home() {
    return (
        <div>
            <Layout>
                <Postlist/>
            </Layout>
        </div>
    )
}

export default Home