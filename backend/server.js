const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL database connection setup


// Establishing connection to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create contacts table if not exists
db.query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Contacts table is ready');
    }
});

// API endpoint to handle form submission
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Input validation
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Inserting contact data into MySQL
    const query = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, phone, message], (err, result) => {
        if (err) {
            console.error('Error saving contact:', err);
            return res.status(500).json({ error: 'Failed to save contact information' });
        }
        res.status(201).json({ message: 'Contact information saved successfully', id: result.insertId });
    });
});

// Start server on port 5000
const PORT = 5000;  // Changed to 5000 to avoid conflict with MySQL
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
