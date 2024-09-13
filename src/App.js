import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Header from "./Components/Header";

const App = () => {
    return (
        <>
            <Header />
            <Home />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);