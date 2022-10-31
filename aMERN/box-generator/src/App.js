import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";

function App() {
    // State Variables
    const [boxes, setBoxes] = useState([
        {
            color: "red",
        },
        {
            color: "blue",
        },
        {
            color: "purple",
        },
    ]);

    // Add box to State
    const addToState = color => {
        setBoxes([...boxes, color]);
    };

    // Return
    return (
        <div className="container w-7/12 mx-auto text-center">
            <Form addToState={addToState} />
            <Display boxes={boxes} />
        </div>
    );
}

export default App;
