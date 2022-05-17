import "./App.css";
import "../index.css"

import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";

import { BrowserRouter } from "react-router-dom";

const App = props => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    )
}

export default App;