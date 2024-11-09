const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();

// MySQL database connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


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

db.query(`
    CREATE TABLE IF NOT EXISTS blood_donation (
      id INT AUTO_INCREMENT PRIMARY KEY,
      donor_name VARCHAR(50) NOT NULL,
      donor_email VARCHAR(50) NOT NULL,
      donor_phone VARCHAR(20) NOT NULL,
      blood_group CHAR(3) NOT NULL,
      donation_date DATE NOT NULL,
      donation_location VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) console.error('Error creating table:', err);
    else console.log('blood_donation table created successfully');
});

db.query(`
    CREATE TABLE IF NOT EXISTS blood_request (
        id INT AUTO_INCREMENT PRIMARY KEY,
        patient_name VARCHAR(50) NOT NULL,
        patient_email VARCHAR(50) NOT NULL,
        patient_phone VARCHAR(20) NOT NULL,
        blood_group CHAR(3) NOT NULL,
        requested_units INT NOT NULL,
        request_reason TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) console.error('Error creating table:', err);
    else console.log('blood_request table created successfully');
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

// API endpoint to handle blood donation form submission
app.post('/api/donate', (req, res) => {
    const { donor_name, donor_email, donor_phone, blood_group, donation_date, donation_location } = req.body;

    const query = 'INSERT INTO blood_donation (donor_name, donor_email, donor_phone, blood_group, donation_date, donation_location) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [donor_name, donor_email, donor_phone, blood_group, donation_date, donation_location], (err, result) => {
        if (err) {
            console.error('Error saving donation:', err);
            res.status(500).json({ error: 'Failed to save donation information' });
            return;
        }
        res.status(201).json({ message: 'Donation information saved successfully' });
    });
});

app.post('/api/request', (req, res) => {
    const { patient_name, patient_email, patient_phone, blood_group, requested_units, request_reason } = req.body;

    const query = `INSERT INTO blood_request (patient_name, patient_email, patient_phone, blood_group, requested_units, request_reason) VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(query, [patient_name, patient_email, patient_phone, blood_group, requested_units, request_reason], (err, result) => {
        if (err) {
            console.error('Database insert error:', err);
            res.status(500).send('Error submitting blood request');
        } else {
            res.status(200).send('Blood request submitted successfully');
        }
    });
});

// Start server on port 5000
const PORT = 5000;  // Changed to 5000 to avoid conflict with MySQL
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
