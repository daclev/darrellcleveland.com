import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./socialicons";

function Navbar() {
    return (
        <div className="navbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/blog">Blog</Link>
            <Link className="links" to="/about">About</Link>
            <SocialIcons />
        </div>
    )
}

export default Navbar