import React from "react";
import CONFIG from 'base/config';
import {Link} from "react-router-dom";

function Section2() {
    return <section style={{
        width: '100%',
        height: '400px',
        border: '1px solid blue'
    }}>
        <p>Contact Page Section 2</p>
        <Link to={CONFIG.ROUTES.ABOUT}>Go About</Link>
    </section>
}

export default Section2;