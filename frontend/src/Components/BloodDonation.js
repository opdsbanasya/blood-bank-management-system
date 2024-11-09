import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BloodDonationForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        donor_name: '',
        donor_email: '',
        donor_phone: '',
        blood_group: '',
        donation_date: '',
        donation_location: '',
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
                <h2 className="text-2xl font-bold text-center mb-6 text-red-700">Blood Donation Form</h2>

                <label className="block mb-4">
                    <span className="text-red-700">Donor Name</span>
                    <input
                        type="text"
                        name="donor_name"
                        maxLength="50"
                        required
                        value={formData.donor_name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Donor Email</span>
                    <input
                        type="email"
                        name="donor_email"
                        maxLength="50"
                        required
                        value={formData.donor_email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Donor Phone</span>
                    <input
                        type="text"
                        name="donor_phone"
                        maxLength="20"
                        required
                        value={formData.donor_phone}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
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
                        className="mt-1 block w-full px-3 py-2 border border-red-600 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Donation Date</span>
                    <input
                        type="date"
                        name="donation_date"
                        required
                        value={formData.donation_date}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </label>

                <label className="block mb-6">
                    <span className="text-red-700">Donation Location</span>
                    <input
                        type="text"
                        name="donation_location"
                        maxLength="100"
                        required
                        value={formData.donation_location}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
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

export default BloodDonationForm;
