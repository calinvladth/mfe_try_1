import React from "react";
import CONFIG from 'base/config';
import {Link} from "react-router-dom";

function Section1() {
    return <section style={{
        width: '100%',
        height: '400px',
        border: '1px solid blue'
    }}>
        <p>Section1</p>
        <Link to={CONFIG.ROUTES.ABOUT}>About Page</Link>
        <Link to={CONFIG.ROUTES.CONTACT}>Contact Page</Link>
    </section>
}

export default Section1;