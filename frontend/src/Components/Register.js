import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

function DonorRegister() {
    const navigate = useNavigate();  

    const handleBack = () => {
        navigate(-1);  
    };

    return (
        <div className="min-h-screen w-[80%] mx-auto py-10 relative">
            <button
                type="button"
                onClick={handleBack}
                className="absolute top-5 left-5 text-red-600 font-semibold hover:text-red-700 focus:outline-none"
            >
                &lt; Back
            </button>
            <h2 className="text-2xl font-semibold text-center mb-8 text-red-600">Donor</h2>
            <form className="flex flex-col w-1/2 px-16 mx-auto bg-red-200 pt-7 pb-10 gap-5 rounded-lg shadow-md">
                <h3 className="w-fit mx-auto text-lg underline text-red-600">Register</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Name</span>
                    <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        type="text"
                        placeholder="Name"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Email</span>
                    <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        type="email"
                        placeholder="Email"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Phone Number</span>
                    <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        type="number"
                        placeholder="Phone number"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Password</span>
                    <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        type="password"
                        placeholder="Password"
                    />
                </label>
                <label className="block mb-6">
                    <span className="text-gray-700">Confirm Password</span>
                    <input
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        type="password"
                        placeholder="Confirm Password"
                    />
                </label>
                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Register
                </button>
                <p className="text-sm text-center">
                    Already have an account?{' '}
                    <Link to="/donorlogin" className="text-blue-900 underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default DonorRegister;
