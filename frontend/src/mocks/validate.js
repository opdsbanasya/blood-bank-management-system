// Regular expressions for validation
const VALIDATORS = {
    name: {
        pattern: /^[A-Za-z\s]{3,50}$/,
        message: 'Name must contain only letters and spaces (3-50 characters)'
    },
    email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        pattern: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/,
        message: 'Please enter a valid 10-digit phone number'
    },
    message: {
        pattern: /^[\s\S]{10,500}$/,
        message: 'Message must be between 10 and 500 characters'
    }
};

// Helper function to validate email domain
const isValidEmailDomain = async (email) => {
    const disposableDomains = [
        'tempmail.com', 'throwaway.com', 'tempmail.net', 'temporary-mail.net'
    ];
    const domain = email.split('@')[1];

    if (disposableDomains.includes(domain)) {
        return false;
    }

    try {
        return domain.includes('.') && domain.split('.')[1].length >= 2;
    } catch (error) {
        return false;
    }
};

// Validate individual fields
export const validateField = async (name, value) => {
    const validator = VALIDATORS[name];
    if (!validator) return '';

    // Trim value before validation
    value = value.trim();

    if (!value) {
        return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    // Check pattern match
    if (!validator.pattern.test(value)) {
        return validator.message;
    }

    // Additional validations for specific fields
    if (name === 'email') {
        const isValidDomain = await isValidEmailDomain(value);
        if (!isValidDomain) {
            return 'Please enter a valid email domain';
        }
    }

    if (name === 'name') {
        if (value.length < 3) {
            return 'Name must be at least 3 characters long';
        }
        if (/\s{2,}/.test(value)) {
            return 'Name cannot contain consecutive spaces';
        }
    }

    if (name === 'phone') {
        const numbers = value.replace(/[^\d]/g, '');
        if (numbers.length !== 10 || !/^[6789]/.test(numbers)) {
            return 'Please enter a valid phone number';
        }
    }

    return '';
};

// Handle field changes and validation
export const handleChange = async (e, setFormData, setErrors) => {
    const { name, value } = e.target;
    
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));

    // Validate field as user types
    const error = await validateField(name, value);
    setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error
    }));
};

// Handle form submission
export const handleSubmit = async (e, formData, setFormData, setErrors) => {
    e.preventDefault();
    
    const errors = {};
    for (const [field, value] of Object.entries(formData)) {
        const error = await validateField(field, value);
        if (error) {
            errors[field] = error;
        }
    }

    if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setErrors({});
            alert('Message sent successfully!');
        } else {
            setErrors({ submit: data.error || 'Failed to send message. Please try again.' });
        }
    } catch (error) {
        console.error('Submission error:', error);
        setErrors({ submit: `Error: ${error.message}` });
    }
};
