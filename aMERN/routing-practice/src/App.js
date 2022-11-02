import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Input from "./components/Input";

function App() {
    return (
        <div className="container m-auto p-2">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:input/:txt/:bg" element={<Input />} />
            </Routes>
        </div>
    );
}

export default App;
