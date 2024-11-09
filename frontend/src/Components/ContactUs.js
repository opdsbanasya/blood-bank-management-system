import React, { useState } from 'react';
import { handleChange, handleSubmit } from '../mocks/validate'; // Import validation functions

const ContactUs = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // State to store error messages
    const [errors, setErrors] = useState({});

    // Handle input changes
    const onFieldChange = async (e) => {
        await handleChange(e, setFormData, setErrors); // Validate as user types
    };

    // Handle form submission
    const onSubmit = async (event) => {
        event.preventDefault();

        await handleSubmit(event, formData, setFormData, setErrors); // Validate and submit form data
    };

    return (
        <section className="w-full py-10 px-10">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <div className="py-10">
                <h2 className="text-center text-xl mb-5 underline">Get in touch</h2>
                <form
                    onSubmit={onSubmit}
                    className="w-[50%] mx-auto flex flex-col py-10 gap-5 px-10 bg-zinc-200 rounded-md shadow-lg"
                >
                    <input
                        className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onFieldChange}
                        placeholder="Enter Name"
                        required
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}

                    <input
                        className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onFieldChange}
                        placeholder="Enter email"
                        required
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}

                    <input
                        className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={onFieldChange}
                        placeholder="Enter contact number"
                        required
                    />
                    {errors.phone && <p className="text-red-600">{errors.phone}</p>}

                    <textarea
                        className="px-4 p-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        name="message"
                        value={formData.message}
                        onChange={onFieldChange}
                        placeholder="Feedback"
                        required
                    />
                    {errors.message && <p className="text-red-600">{errors.message}</p>}

                    <button
                        type="submit"
                        className="py-2 px-4 bg-red-600 rounded-md resize-none text-white w-fit mx-auto hover:bg-red-700 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
