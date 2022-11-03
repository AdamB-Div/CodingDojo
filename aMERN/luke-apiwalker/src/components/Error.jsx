import React from "react";

const Error = props => {
    return (
        <div className="flex justify-center mt-10">
            <img
                src="data:image/jpeg;base64,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"
                alt="kenobi"
                className="w-full"
            />
        </div>
    );
};

export default Error;
