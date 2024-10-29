const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'blood_bank_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const [result] = await pool.execute(
            'INSERT INTO contact_us (name, email, phone, message) VALUES (?, ?, ?, ?)',
            [name, email, phone, message]
        );

        res.status(201).json({
            message: 'Message sent successfully',
            id: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error sending message',
            error: error.message
        });
    }
});

app.post('/api/donations', async (req, res) => {
    try {
        const { donor_name, donor_email, donor_phone, blood_group, donation_date, donation_location } = req.body;

        const [result] = await pool.execute(
            'INSERT INTO blood_donation (donor_name, donor_email, donor_phone, blood_group, donation_date, donation_location) VALUES (?, ?, ?, ?, ?, ?)',
            [donor_name, donor_email, donor_phone, blood_group, donation_date, donation_location]
        );

        const [existingBlood] = await pool.execute(
            'SELECT * FROM blood_bank WHERE blood_group = ?',
            [blood_group]
        );

        if (existingBlood.length > 0) {
            await pool.execute(
                'UPDATE blood_bank SET total_units = total_units + 1, available_units = available_units + 1, last_update = CURDATE() WHERE blood_group = ?',
                [blood_group]
            );
        } else {
            await pool.execute(
                'INSERT INTO blood_bank (blood_group, total_units, available_units, last_update) VALUES (?, 1, 1, CURDATE())',
                [blood_group]
            );
        }

        res.status(201).json({
            message: 'Donation recorded successfully',
            id: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error recording donation',
            error: error.message
        });
    }
});

app.get('/api/donations', async (req, res) => {
    try {
        const [donations] = await pool.execute('SELECT * FROM blood_donation');
        res.json(donations);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching donations',
            error: error.message
        });
    }
});

app.post('/api/requests', async (req, res) => {
    try {
        const { patient_name, patient_email, patient_phone, blood_group, requested_units, request_reason } = req.body;

        const [result] = await pool.execute(
            'INSERT INTO blood_request (patient_name, patient_email, patient_phone, blood_group, requested_units, request_reason) VALUES (?, ?, ?, ?, ?, ?)',
            [patient_name, patient_email, patient_phone, blood_group, requested_units, request_reason]
        );

        res.status(201).json({
            message: 'Blood request submitted successfully',
            id: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error submitting blood request',
            error: error.message
        });
    }
});

app.get('/api/requests', async (req, res) => {
    try {
        const [requests] = await pool.execute('SELECT * FROM blood_request');
        res.json(requests);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching blood requests',
            error: error.message
        });
    }
});

app.put('/api/requests/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { request_status } = req.body;

        const [result] = await pool.execute(
            'UPDATE blood_request SET request_status = ? WHERE id = ?',
            [request_status, id]
        );

        if (request_status === 'Approved') {
            const [request] = await pool.execute(
                'SELECT blood_group, requested_units FROM blood_request WHERE id = ?',
                [id]
            );

            if (request.length > 0) {
                await pool.execute(
                    'UPDATE blood_bank SET available_units = available_units - ?, last_update = CURDATE() WHERE blood_group = ?',
                    [request[0].requested_units, request[0].blood_group]
                );
            }
        }

        res.json({ message: 'Request status updated successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating request status',
            error: error.message
        });
    }
});

app.get('/api/blood-bank', async (req, res) => {
    try {
        const [inventory] = await pool.execute('SELECT * FROM blood_bank');
        res.json(inventory);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching blood bank inventory',
            error: error.message
        });
    }
});

app.put('/api/blood-bank/:blood_group', async (req, res) => {
    try {
        const { blood_group } = req.params;
        const { total_units, available_units } = req.body;

        const [result] = await pool.execute(
            'UPDATE blood_bank SET total_units = ?, available_units = ?, last_update = CURDATE() WHERE blood_group = ?',
            [total_units, available_units, blood_group]
        );

        if (result.affectedRows === 0) {
            await pool.execute(
                'INSERT INTO blood_bank (blood_group, total_units, available_units, last_update) VALUES (?, ?, ?, CURDATE())',
                [blood_group, total_units, available_units]
            );
        }

        res.json({ message: 'Blood bank inventory updated successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating blood bank inventory',
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});