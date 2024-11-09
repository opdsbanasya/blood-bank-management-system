# Blood Bank Management System

This project is a **Blood Bank Management System** designed to manage and keep track of blood inventory details, including blood group, total units, available units, and the last update date. The frontend is built with **React.js** and styled using **Tailwind CSS**.

## Project Overview

The Blood Bank Management System allows users to add blood inventory details through a form, which includes:

- Blood Group
- Total Units of Blood
- Available Units of Blood
- Last Update Date

The system includes form validation and a server endpoint to store submitted data in a database.

## Features

- **Blood Inventory Form**: A form where users can enter blood group details, total and available units, and the last update date.
- **Validation**: Ensures the data entered is correct, such as:
  - Valid blood group format (e.g., "A+", "O-").
  - Positive values for total and available units.
  - Available units should not exceed total units.
- **Data Submission**: Submits validated data to a server API for storage.

## File Structure

### Main Files

- `BloodInventoryForm.js`: React component for the blood inventory form. It displays input fields and handles form validation.
- `validateBloodBank.js`: Utility file with functions to validate form data, handle input changes, and submit the form data to the server.
- `server.js`: Server setup file that handles form data submission to the `/api/blood-inventory` endpoint.

## Setup

### Prerequisites

- **Node.js** and **npm**
- **MySQL** database

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/opdsbanasya/blood-bank-management-system.git
   cd blood-bank-management
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Database Setup**:

   - Create the `blood_bank` table in your MySQL database.
   - Configure the database connection in `server.js`.

4. **Start the server**:

   ```bash
   node server.js
   ```

5. **Run the frontend**:
   ```bash
   npm start
   ```

## Usage

- Open the frontend in your browser and fill in the Blood Inventory Form.
- Submit the form to send data to the server.
- Ensure the server is running to process and store the data.

## Validation Rules

- **Blood Group**: Must be a valid blood group format (`A+`, `B-`, etc.).
- **Total Units**: Must be a positive number.
- **Available Units**: Cannot be negative or exceed total units.
- **Last Update**: Must be a valid date.

## Technologies Used

- **React.js** - For the frontend.
- **Node.js** and **Express.js** - For the server and backend API.
- **MySQL** - For data storage.
- **Tailwind CSS** - For styling.