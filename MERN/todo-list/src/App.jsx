import ToDoForm from "./components/ToDoForm";
import ToDoDisplay from "./components/ToDoDisplay";

const App = () => {
    return (
        <div className="App">
            <ToDoForm getToDo={msg} />
            <ToDoDisplay toDo={currentToDo} />
        </div>
    );
};

export default App;
