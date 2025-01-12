import React from "react"

function Footer() {
    return (
        <div className="footer">
            <hr />
            <p>&copy; daclev {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer