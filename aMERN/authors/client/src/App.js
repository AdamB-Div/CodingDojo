import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Authors from "./views/Authors";
import NewAuthor from "./views/NewAuthor";
import UpdateAuthor from "./views/UpdateAuthor";

function App() {
    // State Variables
    const [authors, setAuthors] = useState([]);

    // useEffect
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [authors]);

    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
                path="/"
                element={<Authors authors={authors} setAuthors={setAuthors} />}
            />
            <Route
                path="/new"
                element={
                    <NewAuthor authors={authors} setAuthors={setAuthors} />
                }
            />
            <Route
                path="/edit/:id"
                element={
                    <UpdateAuthor authors={authors} setAuthors={setAuthors} />
                }
            />
        </Routes>
    );
}

export default App;
