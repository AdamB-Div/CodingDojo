import React from "react";

const Display = props => {
    return (
        <div className="grid gap-4 gap-y-16 grid-cols-3">
            {props.boxes.map((box, idx) => {
                return (
                    <div
                        key={idx}
                        className="w-32 h-32 m-auto rounded"
                        style={{ backgroundColor: box.color }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Display;
