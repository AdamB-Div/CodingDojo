import React from "react";
import { useParams } from "react-router-dom";

const Input = props => {
    const { input, txt, bg } = useParams();

    return (
        <div style={{ backgroundColor: bg }}>
            {isNaN(input) ? (
                <p className="text-2xl font-bold" style={{ color: txt }}>
                    The word is: {input}
                </p>
            ) : (
                <p className="text-2xl font-bold" style={{ color: txt }}>
                    The number is: {input}
                </p>
            )}
        </div>
    );
};

export default Input;
