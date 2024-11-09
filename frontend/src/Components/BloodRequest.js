import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BloodRequestForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        patient_name: '',
        patient_email: '',
        patient_phone: '',
        blood_group: '',
        requested_units: '',
        request_reason: '',
        request_status: 'Pending',
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
        <div className="flex justify-center items-center min-h-screen py-10 bg-gray-100 relative">
            <button
                type="button"
                onClick={handleBack}
                className="absolute text-white top-6 left-5 px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none"
            >
                &lt; Back
            </button>
            <form
                onSubmit={handleSubmit}
                className="w-1/2 bg-white p-8 shadow-md rounded-md border border-red-600"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-red-700">Blood Request Form</h2>

                <label className="block mb-4">
                    <span className="text-red-700">Patient Name</span>
                    <input
                        type="text"
                        name="patient_name"
                        maxLength="50"
                        required
                        value={formData.patient_name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Patient Email</span>
                    <input
                        type="email"
                        name="patient_email"
                        maxLength="50"
                        required
                        value={formData.patient_email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Patient Phone</span>
                    <input
                        type="text"
                        name="patient_phone"
                        maxLength="20"
                        required
                        value={formData.patient_phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Blood Group</span>
                    <input
                        type="text"
                        name="blood_group"
                        maxLength="3"
                        required
                        value={formData.blood_group}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Requested Units</span>
                    <input
                        type="number"
                        name="requested_units"
                        min="1"
                        required
                        value={formData.requested_units}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Request Reason</span>
                    <textarea
                        name="request_reason"
                        required
                        value={formData.request_reason}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="mb-6 hidden">
                    <span className="text-red-700">Request Status</span>
                    <select
                        name="request_status"
                        value={formData.request_status}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Denied">Denied</option>
                    </select>
                </label>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BloodRequestForm;
