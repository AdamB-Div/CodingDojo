import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";

const NewAuthor = props => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const newThing = e => {
        e.preventDefault();
        const newThing = {
            name,
        };
        axios
            .post("http://localhost:8000/api/authors", newThing)
            .then(res => {
                console.log(res);
                props.setAuthors([...props.authors, newThing]);
                navigate("/");
            })
            .catch(err => {
                console.log("Client Error", err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div className="container m-auto p-4 flex flex-col gap-4">
            <Header />
            <Link to={"/"} className="text-blue-700 underline">
                Home
            </Link>
            <p className="text-purple-600 font-bold text-md mb-3">
                We Have Quotes By:
            </p>
            <Form
                action={newThing}
                val1={name}
                setVal1={setName}
                errors={errors}
            />
        </div>
    );
};

export default NewAuthor;
