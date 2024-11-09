
const VALIDATORS = {
    patient_name: {
        pattern: /^[A-Za-z\s]{3,50}$/,
        message: 'Patient name must contain only letters and spaces (3-50 characters)'
    },
    patient_email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email address'
    },
    patient_phone: {
        pattern: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
        message: 'Please enter a valid 10-digit phone number'
    },
    blood_group: {
        pattern: /^(A|B|AB|O)[+-]$/,
        message: 'Please enter a valid blood group (e.g., A+, B-, AB+, O-)'
    },
    requested_units: {
        pattern: /^[1-9]\d*$/,
        message: 'Please enter a valid number of units (must be 1 or more)'
    },
    request_reason: {
        pattern: /^.{10,500}$/,
        message: 'Reason must be between 10 and 500 characters'
    }
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
        if (error) errors[field] = error;
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setFormData({
                patient_name: '',
                patient_email: '',
                patient_phone: '',
                blood_group: '',
                requested_units: '',
                request_reason: '',
                request_status: 'Pending',
            })
            alert('Blood request submitted successfully!');
        } else {
            setErrors({ submit: 'Failed to submit blood request' });
        }
    } catch (error) {
        console.error('Submission error:', error);
        setErrors({ submit: `Error: ${error.message}` });
    }
};
