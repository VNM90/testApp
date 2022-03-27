import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/add">
                    <li>ADD MOVIE</li>
                </Link>      
            </ul>
        </nav>
    )
}