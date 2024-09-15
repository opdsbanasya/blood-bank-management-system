import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

const App = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element: <AboutUs />
        },
        {
            path: "contact",
            element: <ContactUs />
        }
    ])

    return (
        <>
            <Header />
            <Home />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);