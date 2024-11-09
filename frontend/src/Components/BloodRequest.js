import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleChange, handleSubmit } from '../mocks/validateBloodRequest';

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

    const [errors, setErrors] = useState({});

    const handleBack = () => {
        navigate(-1);
    };

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
                onSubmit={(e) => handleSubmit(e, formData, setFormData, setErrors)}
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
                        onChange={(e) => handleChange(e, setFormData, setErrors)}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    {errors.patient_name && <p className="text-red-600 text-sm">{errors.patient_name}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Patient Email</span>
                    <input
                        type="email"
                        name="patient_email"
                        maxLength="50"
                        required
                        value={formData.patient_email}
                        onChange={(e) => handleChange(e, setFormData, setErrors)}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    {errors.patient_email && <p className="text-red-600 text-sm">{errors.patient_email}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Patient Phone</span>
                    <input
                        type="text"
                        name="patient_phone"
                        maxLength="20"
                        required
                        value={formData.patient_phone}
                        onChange={(e) => handleChange(e, setFormData, setErrors)}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    {errors.patient_phone && <p className="text-red-600 text-sm">{errors.patient_phone}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Blood Group</span>
                    <input
                        type="text"
                        name="blood_group"
                        maxLength="3"
                        required
                        value={formData.blood_group}
                        onChange={(e) => handleChange(e, setFormData, setErrors)}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    {errors.blood_group && <p className="text-red-600 text-sm">{errors.blood_group}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Requested Units</span>
                    <input
                        type="number"
                        name="requested_units"
                        min="1"
                        required
                        value={formData.requested_units}
                        onChange={(e) => handleChange(e, setFormData, setErrors)}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    {errors.requested_units && <p className="text-red-600 text-sm">{errors.requested_units}</p>}
                </label>

                <label className="block mb-4">
                    <span className="text-red-700">Request Reason</span>
                    <textarea
                        name="request_reason"
                        required
                        value={formData.request_reason}
                        onChange={(e) => handleChange(e, setFormData, setErrors)}
                        className="mt-1 block w-full px-3 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    {errors.request_reason && <p className="text-red-600 text-sm">{errors.request_reason}</p>}
                </label>

                <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                    Submit
                </button>

                {errors.submit && <p className="text-red-600 text-sm mt-4 text-center">{errors.submit}</p>}
            </form>
        </div>
    );
}

export default BloodRequestForm;
