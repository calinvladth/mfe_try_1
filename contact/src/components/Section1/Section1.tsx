import React from "react";
import CONFIG from 'base/config';
import {Link} from "react-router-dom";


function Section1() {

    return <section style={{
        width: '100%',
        height: '400px',
        border: '1px solid red'
    }}>
        <p>Contact Page Section 1</p>
        <Link to={CONFIG.ROUTES.HOME}>Go Home</Link>
    </section>
}

export default Section1;