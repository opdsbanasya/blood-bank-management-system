// validateBloodDonation.js

const VALIDATORS = {
    donor_name: {
        pattern: /^[A-Za-z\s]{3,50}$/,
        message: 'Donor name must contain only letters and spaces (3-50 characters)'
    },
    donor_email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email address'
    },
    donor_phone: {
        pattern: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
        message: 'Please enter a valid 10-digit phone number'
    },
    blood_group: {
        pattern: /^(A|B|AB|O)[+-]$/,
        message: 'Please enter a valid blood group (e.g., A+, B-, AB+, O-)'
    },
    donation_date: {
        pattern: /^\d{4}-\d{2}-\d{2}$/,
        message: 'Please enter a valid date in YYYY-MM-DD format'
    },
    donation_location: {
        pattern: /^[A-Za-z\s]{3,100}$/,
        message: 'Location must be between 3 and 100 characters'
    }
};

// Optional: Add asynchronous validation if needed
const isValidBloodGroup = (blood_group) => {
    const validGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    return validGroups.includes(blood_group.toUpperCase());
};

export const validateField = (name, value) => {
    const validator = VALIDATORS[name];
    if (!validator) return '';

    if (!value.trim()) {
        return `${name.replace('_', ' ')} is required`;
    }

    if (!validator.pattern.test(value)) {
        return validator.message;
    }

    // Additional validation for specific fields
    if (name === 'blood_group') {
        if (!isValidBloodGroup(value)) {
            return 'Please enter a valid blood group (e.g., A+, B-, AB+, O-)';
        }
    }

    return '';
};

export const handleChange = (e, setFormData, setErrors) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error
    }));
};

export const handleSubmit = async (e, formData, setFormData, setErrors) => {
    e.preventDefault();

    const errors = {};
    for (const [field, value] of Object.entries(formData)) {
        const error = validateField(field, value);
        if (error) {
            errors[field] = error;
        }
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            setFormData({
                donor_name: '',
                donor_email: '',
                donor_phone: '',
                blood_group: '',
                donation_date: '',
                donation_location: '',
            });
            setErrors({});
            alert('Donation information submitted successfully!');
        } else {
            setErrors({ submit: data.error || 'Failed to submit donation information' });
        }
    } catch (error) {
        console.error('Submission error:', error);
        setErrors({ submit: `Error: ${error.message}` });
    }
};
