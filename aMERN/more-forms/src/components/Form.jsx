import React from "react";
import { useState } from "react";

const Form = props => {
    // ================= Variables ================
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMsg, setErrorMsg] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // ================== Functions ===============

    const handleChange = e => {
        // Set State Variable
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        // Vaildations
        // First Name
        if (e.target.name === "firstName") {
            if (e.target.value.length !== 0 && e.target.value.length < 2) {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "First Name must be at least 2 characters",
                });
            } else {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "",
                });
            }
            // Last Name
        } else if (e.target.name === "lastName") {
            if (e.target.value.length !== 0 && e.target.value.length < 2) {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "Last Name must be at least 2 characters",
                });
            } else {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "",
                });
            }
            // Email
        } else if (e.target.name === "email") {
            if (e.target.value.length !== 0 && e.target.value.length < 5) {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "Email must be at least 5 characters",
                });
            } else {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "",
                });
            }
            // Password
        } else if (e.target.name === "password" || "confirmPassword") {
            if (e.target.value.length !== 0 && e.target.value.length < 8) {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "Password must be at least 8 characters",
                });
            } else if (
                e.target.name === "confirmPassword" &&
                e.target.value !== input.password
            ) {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "Passwords Don't Match",
                });
            } else {
                setErrorMsg({
                    ...errorMsg,
                    [e.target.name]: "",
                });
            }
        }
    };

    // =================== Render ================

    return (
        <div className="flex flex-col items-center">
            {/* ============ Form =================== */}
            <form className="w-full max-w-sm">
                {/* ============ First Name ============= */}
                <div className="flex items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">First Name</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            name="firstName"
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={handleChange}
                            value={input.firstName}
                        />
                        {errorMsg.firstName ? (
                            <p className="text-sm text-red-700">
                                {errorMsg.firstName}
                            </p>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>

                {/* ============ Last Name ============= */}

                <div className="flex items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Last Name</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            name="lastName"
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={handleChange}
                            value={input.lastName}
                        />
                        {errorMsg.lastName ? (
                            <p className="text-sm text-red-700">
                                {errorMsg.lastName}
                            </p>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>

                {/* ============ Email ============= */}

                <div className="flex items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Email</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            name="email"
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={handleChange}
                            value={input.email}
                        />
                        {errorMsg.email ? (
                            <p className="text-sm text-red-700">
                                {errorMsg.email}
                            </p>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>

                {/* ============ Password ============= */}

                <div className="flex items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Password</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            name="password"
                            type="password"
                            className="border-2 border-gray-200 rounded"
                            onChange={handleChange}
                            value={input.password}
                        />
                        {errorMsg.password ? (
                            <p className="text-sm text-red-700">
                                {errorMsg.password}
                            </p>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>

                {/* ============ Confirm Password ============= */}

                <div className="flex items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Confirm Password</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            name="confirmPassword"
                            type="password"
                            className="border-2 border-gray-200 rounded"
                            onChange={handleChange}
                            value={input.confirmPassword}
                        />
                        {errorMsg.confirmPassword ? (
                            <p className="text-sm text-red-700">
                                {errorMsg.confirmPassword}
                            </p>
                        ) : (
                            <p></p>
                        )}
                    </div>
                </div>
            </form>

            {/* =============== Data Display ================ */}

            <p className="m-4">Your Form Data</p>

            {/* ========== First Name =========== */}

            <div className="flex flex-col gap-2">
                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>First Name: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{input.firstName}</p>
                    </div>
                </div>

                {/* ========== Lastt Name =========== */}

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Last Name: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{input.lastName}</p>
                    </div>
                </div>

                {/* ========== Email =========== */}

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Email: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{input.email}</p>
                    </div>
                </div>

                {/* ========== Password =========== */}

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Password: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{input.password}</p>
                    </div>
                </div>

                {/* ========== Confirm Password =========== */}

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Confirm Password: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{input.confirmPassword}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
