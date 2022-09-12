import React, { useState } from "react";

const HookForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form className="flex flex-col">
                <label>First Name:</label>
                <input
                    onChange={e => {
                        setFirstName(e.target.value);
                    }}
                    type="text"
                    value={firstName}
                    className="border"
                />

                <label>Last Name:</label>
                <input
                    onChange={e => {
                        setLastName(e.target.value);
                    }}
                    type="text"
                    value={lastName}
                    className="border"
                />

                <label>Email:</label>
                <input
                    onChange={e => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                    value={email}
                    className="border"
                />

                <label>Password:</label>
                <input
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    value={password}
                    className="border"
                />

                <label>Confirm Password:</label>
                <input
                    onChange={e => {
                        setConfirmPassword(e.target.value);
                    }}
                    type="password"
                    value={confirmPassword}
                    className="border"
                />
            </form>

            <h3>Your Form Submission</h3>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmPassword}</p>
        </div>
    );
};

export default HookForm;
