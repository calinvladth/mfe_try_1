import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom";
import AboutPage from "./AboutPage";

function App() {
    return (
        <Routes>
            <Route index element={<>
                <AboutPage/>
            </>}/>
        </Routes>
    );
}

export default App;

ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById("app"));


