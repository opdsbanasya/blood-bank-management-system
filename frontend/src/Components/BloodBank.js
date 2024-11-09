import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BloodInventoryForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        blood_group: '',
        total_units: '',
        available_units: '',
        last_update: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
            <button
                type="button"
                onClick={handleBack}
                className="absolute text-white top-6 left-5 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none"
            >
                &lt; Back
            </button>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 shadow-md rounded-md w-1/2 border border-red-500"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-red-700">Blood Inventory Form</h2>

                <label className="block mb-4">
                    <span className="text-red-700">Blood Group</span>
                    <input
                        type="text"
                        name="blood_group"
                        maxLength="3"
                        required
                        value={formData.blood_group}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Total Units</span>
                    <input
                        type="number"
                        name="total_units"
                        min="1"
                        required
                        value={formData.total_units}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Available Units</span>
                    <input
                        type="number"
                        name="available_units"
                        min="0"
                        required
                        value={formData.available_units}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </label>

                <label className="block mb-6">
                    <span className="text-red-700">Last Update</span>
                    <input
                        type="date"
                        name="last_update"
                        required
                        value={formData.last_update}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-red-700 text-white py-2 rounded-md font-semibold hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BloodInventoryForm;