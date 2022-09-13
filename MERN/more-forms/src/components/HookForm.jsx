import React, { useState } from "react";

const HookForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = e => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = e => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = e => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 5) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== { password }) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setPasswordError("");
        }
    };

    return (
        <div>
            <form className="flex flex-col">
                <label>First Name:</label>
                <input
                    onChange={handleFirstName}
                    type="text"
                    value={firstName}
                    className="border"
                />
                {firstNameError ? <p>{firstNameError}</p> : ""}

                <label>Last Name:</label>
                <input
                    onChange={handleLastName}
                    type="text"
                    value={lastName}
                    className="border"
                />
                {lastNameError ? <p>{lastNameError}</p> : ""}

                <label>Email:</label>
                <input
                    onChange={handleEmail}
                    type="email"
                    value={email}
                    className="border"
                />
                {emailError ? <p>{emailError}</p> : ""}

                <label>Password:</label>
                <input
                    onChange={handlePassword}
                    type="password"
                    value={password}
                    className="border"
                />
                {passwordError ? <p>{passwordError}</p> : ""}

                {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
                <label>Confirm Password:</label>
                <input
                    onChange={handleConfirmPassword}
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
