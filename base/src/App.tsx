import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

import {Routes, Route, BrowserRouter} from "react-router-dom";

import CONFIG from "../config";

const HomePageMFE = React.lazy(() => import('home/HomePage'));
const AboutPageMFE = React.lazy(() => import('about/AboutPage'));
const ContactPageMFE = React.lazy(() => import('contact/ContactPage'));

function LoadingMFE() {
    return <p>Loading ...</p>
}

function App() {
    return (
        <Routes>
            <Route path={CONFIG.ROUTES.HOME} element={<Layout/>}>
                <Route index element={<React.Suspense fallback={LoadingMFE()}><HomePageMFE/></React.Suspense>}/>
                <Route path={CONFIG.ROUTES.ABOUT}
                       element={<React.Suspense fallback={LoadingMFE()}><AboutPageMFE/></React.Suspense>}/>
                <Route path={CONFIG.ROUTES.CONTACT}
                       element={<React.Suspense fallback={LoadingMFE()}><ContactPageMFE/></React.Suspense>}/>
                {/*<Route path="dashboard" element={<Dashboard/>}/>*/}

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                {/*<Route path="*" element={<NoMatch />} />*/}
            </Route>
        </Routes>
    )
};

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("app"));
