import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="container">
            <p className="float-end"><a href="#">Back to top</a></p>
            <p>&copy; {new Date().getFullYear()} Mar Tours, Inc. &middot; <Link to="#">Privacy</Link> &middot; <Link to="#">Terms</Link>  &middot; <Link to="/admincms">For Owner</Link></p>
        </footer >
    )
}
