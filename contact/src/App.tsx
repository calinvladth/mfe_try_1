import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom";
import ContactPage from "./ContactPage";

function App() {
    return (
        <Routes>
            <Route index element={<>
                <ContactPage/>
            </>}/>
        </Routes>
    );
}

export default App;

ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>, document.getElementById("app"));


