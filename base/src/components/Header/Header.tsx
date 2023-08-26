import React from "react";
import CONFIG from "../../../config";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={{
            width: '100%',
            height: '100px',
            border: '1px solid black'
        }}>
            <Link to={CONFIG.ROUTES.HOME}>Home</Link>
            <Link to={CONFIG.ROUTES.ABOUT}>About</Link>
            <Link to={CONFIG.ROUTES.CONTACT}>Contact</Link>
        </header>
    )
}

export default Header