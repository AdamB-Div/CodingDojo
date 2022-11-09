import { Routes, Route, Link, Navigate } from "react-router-dom";
import Product from "./views/Product";
import Main from "./views/Main";
import UpdateForm from "./components/UpdateForm";

function App() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<Product />} />
            <Route path="/:id/edit" element={<UpdateForm />} />
        </Routes>
    );
}

export default App;
