import React from "react"
function Footer() {
    const date = new Date().getFullYear()

    return (
        <footer>
            <p>Created by Jeremiah &copy;{date}</p>
        </footer>
    )
}
export default Footer