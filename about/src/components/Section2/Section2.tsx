import React from "react";
import CONFIG from 'base/config';
import {Link} from "react-router-dom";

function Section2() {
    return <section style={{
        width: '100%',
        height: '400px',
        border: '1px solid red'
    }}>
        <p>About Page Section 1</p>
        <Link to={CONFIG.ROUTES.CONTACT}>Go Contact</Link>
    </section>
}

export default Section2;