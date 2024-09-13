import React from "react"
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar"
const App = () => {
    return (
        <Navbar />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);