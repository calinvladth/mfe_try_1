import React, {ReactElement} from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
    return <section style={{
        width: '100%',
        minHeight: '100vh',
        border: '2px solid pink'
    }}>
        <Header/>
        <Outlet/>
        <Footer/>
    </section>
}

export default Layout