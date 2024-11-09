// Function to validate the Blood Bank Form
export const validateBloodBankForm = (formData, setErrors) => {
    const errors = {};

    // Blood group validation
    if (!formData.blood_group) {
        errors.blood_group = "Blood group is required";
    } else if (!/^(A|B|AB|O)[+-]$/.test(formData.blood_group)) {
        errors.blood_group = "Invalid blood group format. Use A+, A-, B+, B-, AB+, AB-, O+, or O-";
    }

    // Total units validation
    if (!formData.total_units) {
        errors.total_units = "Total units is required";
    } else if (formData.total_units <= 0) {
        errors.total_units = "Total units must be greater than 0";
    }

    // Available units validation
    if (!formData.available_units) {
        errors.available_units = "Available units is required";
    } else if (formData.available_units < 0) {
        errors.available_units = "Available units cannot be negative";
    } else if (parseInt(formData.available_units) > parseInt(formData.total_units)) {
        errors.available_units = "Available units cannot exceed total units";
    }

    // Last update validation
    if (!formData.last_update) {
        errors.last_update = "Last update date is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
};

// Function to handle input change
export const handleChange = (e, setFormData, setErrors) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
    }));
};

// Function to handle form submission
export const handleSubmit = async (e, formData, setFormData, setErrors) => {
    e.preventDefault();
    const isValid = validateBloodBankForm(formData, setErrors);

    if (isValid) {
        try {
            // Submit form data to the server
            const response = await fetch('http://localhost:5000/api/blood-inventory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    blood_group: '',
                    total_units: '',
                    available_units: '',
                    last_update: ''
                })
                alert('Form submitted successfully:', formData);
                // Optionally, handle successful submission (e.g., clear form, show success message)
            } else {
                console.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    } else {
        console.log('Form contains errors. Fix errors before submitting.');
    }
};
