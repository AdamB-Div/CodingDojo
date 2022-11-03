import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import Element from "./components/Element";
import Error from "./components/Error";

function App() {
    const [lukeAPI, setLukeAPI] = useState([]);
    const [callParams, setCallParams] = useState({
        attribute: "",
        endpoint: "",
    });
    const [thisOrThat, setThisOrThat] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `https://swapi.dev/api/${callParams.attribute}/${callParams.endpoint}`
            )
            .then(res => setLukeAPI(res.data))
            .catch(err => console.log(err));
    }, [callParams]);

    const setParams = (e, cat, id) => {
        e.preventDefault();
        setCallParams({
            attribute: cat,
            endpoint: id,
        });

        if (cat === "people") {
            setThisOrThat(true);
        } else {
            setThisOrThat(false);
        }

        navigate(`/${cat}/${id}`);
    };

    return (
        <div className="container m-auto p-3">
            <Routes>
                <Route path="/" element={<Form setParams={setParams} />} />
                <Route
                    path="/:attribute/:endpoint"
                    element={
                        <>
                            <Form setParams={setParams} />
                            <Element
                                lukeAPI={lukeAPI}
                                callParams={callParams}
                                thisOrThat={thisOrThat}
                            />
                        </>
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
