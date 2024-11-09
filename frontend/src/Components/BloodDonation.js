import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleChange as validateHandleChange, handleSubmit as validateHandleSubmit } from '../mocks/validataBloodDonation'; 

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

    const [errors, setErrors] = useState({});

    const handleBack = () => {
        navigate(-1);
    };

    const onSubmit = async (e) => {
        await validateHandleSubmit(e, formData, setFormData, setErrors);
    };

    const onChange = async (e) => {
        await validateHandleChange(e, setFormData, setErrors);
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-10 bg-gray-100 relative">
            <button
                type="button"
                onClick={handleBack}
                className="absolute top-5 left-5 text-red-600 font-semibold hover:text-red-700 focus:outline-none"
            >
                &lt; Back
            </button>
            <form
                onSubmit={onSubmit}
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
                        onChange={onChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.donor_name ? 'border-red-600' : 'border-red-600'
                        } bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600`}
                    />
                    {errors.donor_name && <p className="text-red-500 text-sm mt-1">{errors.donor_name}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Donor Email</span>
                    <input
                        type="email"
                        name="donor_email"
                        maxLength="50"
                        required
                        value={formData.donor_email}
                        onChange={onChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.donor_email ? 'border-red-600' : 'border-red-600'
                        } bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600`}
                    />
                    {errors.donor_email && <p className="text-red-500 text-sm mt-1">{errors.donor_email}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Donor Phone</span>
                    <input
                        type="text"
                        name="donor_phone"
                        maxLength="20"
                        required
                        value={formData.donor_phone}
                        onChange={onChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.donor_phone ? 'border-red-600' : 'border-red-600'
                        } bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600`}
                    />
                    {errors.donor_phone && <p className="text-red-500 text-sm mt-1">{errors.donor_phone}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Blood Group</span>
                    <input
                        type="text"
                        name="blood_group"
                        maxLength="3"
                        required
                        value={formData.blood_group}
                        onChange={onChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.blood_group ? 'border-red-600' : 'border-red-600'
                        } bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600`}
                    />
                    {errors.blood_group && <p className="text-red-500 text-sm mt-1">{errors.blood_group}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Donation Date</span>
                    <input
                        type="date"
                        name="donation_date"
                        required
                        value={formData.donation_date}
                        onChange={onChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.donation_date ? 'border-red-600' : 'border-red-600'
                        } bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600`}
                    />
                    {errors.donation_date && <p className="text-red-500 text-sm mt-1">{errors.donation_date}</p>}
                </label>

                <label className="block mb-6">
                    <span className="text-red-700">Donation Location</span>
                    <input
                        type="text"
                        name="donation_location"
                        maxLength="100"
                        required
                        value={formData.donation_location}
                        onChange={onChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            errors.donation_location ? 'border-red-600' : 'border-red-600'
                        } bg-zinc-50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600`}
                    />
                    {errors.donation_location && <p className="text-red-500 text-sm mt-1">{errors.donation_location}</p>}
                </label>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                    Submit
                </button>

                {errors.submit && <p className="text-red-500 text-sm mt-2 text-center">{errors.submit}</p>}
            </form>
        </div>
    );

}

export default BloodDonationForm;
