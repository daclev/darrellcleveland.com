import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About</Link>
        </div>
    )
}

export default Navbar