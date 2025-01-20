import React from "react";
import Layout from "../components/layout"
import MyPhoto from '../assets/images/darrell-photo.jpg';
import "./pages.css"

function Home() {
    return (
        <div>
            <Layout>
                <div className="homepage" style={{ textAlign: 'center', marginBottom: '40px' }} >
                    <img src={MyPhoto} alt="Portrait" loading="lazy" className="profile-icon" />
                    <h1>Welcome to my personal site!</h1>
                    <p>Husband, Dad, and Lead Software Developer</p>
                </div>
            </Layout>
        </div>
    )
}

export default Home