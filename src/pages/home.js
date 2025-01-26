import React from "react";
import Layout from "../components/layout"
import MyPhoto from '../assets/images/darrell-photo.jpg';
import "./pages.css"

function Home() {
    return (
        <div>
            <Layout>
                <div className="homepage" >
                    <img src={MyPhoto} alt="Portrait" loading="lazy" className="profile-icon" />
                    <h1>Husband, Dad, & Software Developer</h1>
                    <p>Welcome to my personal site!</p>
                </div>
            </Layout>
        </div>
    )
}

export default Home