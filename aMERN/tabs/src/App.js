import { useState } from "react";
import Tabs from "./components/Tabs";

function App() {
    const [tabs, setTabs] = useState([
        {
            name: "Tab 1",
            content: "Tab 1 content",
        },
        {
            name: "Tab 2",
            content: "Tab 2 content",
        },
        {
            name: "Tab 3",
            content: "Tab 3 content",
        },
    ]);

    const [index, setIndex] = useState(0);

    const onClickHandler = idx => {
        console.log(idx);
        setIndex(idx);
    };

    return (
        <div className="p-8">
            {console.log(tabs)}
            <Tabs tabs={tabs} onClickHandler={onClickHandler} />
            <p className="border-2 w-80">{tabs[index].content}</p>
        </div>
    );
}

export default App;
