import Form from "./components/Form";
import ToDos from "./components/ToDos";
import { useState } from "react";

function App() {
    // State Variables
    const [toDos, setToDos] = useState([
        {
            content: "Get Python Belt",
            checked: false,
        },
        {
            content: "Get MERN Belt",
            checked: false,
        },
    ]);

    // Handle Check Function
    const handleCheck = idx => {
        setToDos(
            toDos.map((t, i) => {
                if (i === idx) {
                    t.checked = !t.checked;
                }
                return t;
            })
        );
    };

    // New ToDo Function
    const newToDo = (e, content) => {
        e.preventDefault();
        setToDos([
            ...toDos,
            {
                content: content,
                checked: false,
            },
        ]);
    };

    // Remove ToDo Function
    const removeToDo = idx => {
        setToDos(
            toDos.filter((t, i) => {
                return i !== idx;
            })
        );
    };

    // Return
    return (
        <div className="container mx-auto p-4">
            <Form toDos={toDos} newToDo={newToDo} />
            <ToDos
                toDos={toDos}
                handleCheck={handleCheck}
                removeToDo={removeToDo}
            />
        </div>
    );
}

export default App;
