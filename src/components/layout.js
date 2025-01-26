import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./components.css"

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />         
            <div className="layout-content">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout