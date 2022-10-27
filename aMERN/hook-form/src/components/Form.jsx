import React from "react";
import { useState } from "react";

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="flex flex-col items-center">
            <form className="w-full max-w-sm">
                <div className="flex items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">First Name</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Last Name</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Email</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Password</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                </div>

                <div className="md:flex md:items-center mt-5 bg-gray-300 p-1 rounded">
                    <div className="w-1/3 p-1">
                        <label className="block ">Confirm Password</label>
                    </div>
                    <div className="w-2/3">
                        <input
                            type="text"
                            className="border-2 border-gray-200 rounded"
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                    </div>
                </div>
            </form>

            <p className="m-4">Your Form Data</p>

            <div className="flex flex-col gap-2">
                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>First Name: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{firstName}</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Last Name: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{lastName}</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Email: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{email}</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Password: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{password}</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-auto w-44">
                        <p>Confirm Password: </p>
                    </div>
                    <div className="flex-auto w-44">
                        <p>{confirmPassword}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
