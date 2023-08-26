import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bootstrap from "./Bootstrap";

function App() {
    return <>
        <Routes>
            <Route index element={<>
                <Bootstrap/>
            </>}/>
        </Routes>
    </>
}

export default App;


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("app"));
