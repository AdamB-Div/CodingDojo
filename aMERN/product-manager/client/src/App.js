import { Routes, Route, Link } from "react-router-dom";
import Product from "./views/Product";
import Main from "./views/Main";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<Product />} />
        </Routes>
    );
}

export default App;
