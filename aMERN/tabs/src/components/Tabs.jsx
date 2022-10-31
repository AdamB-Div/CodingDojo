import React from "react";
import { useState } from "react";

const Tabs = props => {
    return (
        <div className="flex gap-2">
            {props.tabs.map((tab, idx) => {
                return (
                    <div key={idx}>
                        <button
                            className="border-2 border-black px-4 mb-3 rounded"
                            onClick={() => props.onClickHandler(idx)}
                        >
                            {tab.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Tabs;
