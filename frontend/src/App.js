import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Patient from "./Components/Patient";
import ServicePage from "./Components/ServicePage";
import LoginPage from "./Components/LoginPage"
import Register from "./Components/Register";
import BloodDonation from "./Components/BloodDonation";
import BloodRequest from "./Components/BloodRequest";
import BloodBank from "./Components/BloodBank";

const App = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/donorlogin",
                element: <LoginPage />
            },
            {
                path: "/patientlogin",
                element: <Patient />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/services",
                element: <ServicePage />
            },
            {
                path: "/blooddonation",
                element: <BloodDonation />
            },
            {
                path: "/bloodrequest",
                element: <BloodRequest />
            },
            {
                path: "/bloodbank",
                element: <BloodBank />
            },

        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);