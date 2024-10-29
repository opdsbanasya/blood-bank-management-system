import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // Success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                // Error alert
                Swal.fire({
                    title: 'Error!',
                    text: data.message || 'Something went wrong!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            // Network error alert
            Swal.fire({
                title: 'Error!',
                text: 'Unable to connect to the server. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <section className="w-full py-10 px-10">
            <h1 className="text-2xl font-semibold">Contact Us</h1>
            <div className="py-10">
                <h2 className="text-center text-xl mb-5 underline">Get in touch</h2>
                <form 
                    onSubmit={handleSubmit} 
                    className="w-[50%] mx-auto flex flex-col py-10 gap-5 px-10 bg-zinc-200 rounded-md shadow-lg"
                >
                    <input 
                        className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        required
                    />
                    <input 
                        className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                    <input 
                        className="px-4 py-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                        required
                    />
                    <textarea 
                        className="px-4 p-2 text-black outline-none rounded-lg font-[300] text-lg border border-zinc-500"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Feedback"
                        required
                    />
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