import axios from "axios";
import React, { useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";

const UpdateAuthor = props => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const { name } = state;

    const [updatedName, setUpdatedName] = useState(name);
    const [errors, setErrors] = useState([]);

    const updateThing = e => {
        e.preventDefault();

        const updatedThing = {
            name: updatedName,
        };

        axios
            .put(`http://localhost:8000/api/authors/${id}`, updatedThing)
            .then(res => {
                console.log(res);

                const updatedList = props.authors.filter(a => a._id !== id);
                props.setAuthors(updatedList, updatedThing);
                navigate(`/`);
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
                Edit This Author:
            </p>
            <Form
                action={updateThing}
                val1={updatedName}
                setVal1={setUpdatedName}
                errors={errors}
            />
        </div>
    );
};

export default UpdateAuthor;
