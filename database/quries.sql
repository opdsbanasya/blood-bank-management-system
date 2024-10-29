-- Create the blood_bank database
CREATE DATABASE blood_bank_db;
USE blood_bank_db;

-- Table to store contact us data
CREATE TABLE contact_us (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table to store blood donation data
CREATE TABLE blood_donation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_name VARCHAR(50) NOT NULL,
  donor_email VARCHAR(50) NOT NULL,
  donor_phone VARCHAR(20) NOT NULL,
  blood_group CHAR(3) NOT NULL,
  donation_date DATE NOT NULL,
  donation_location VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table to store blood request data
CREATE TABLE blood_request (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(50) NOT NULL,
  patient_email VARCHAR(50) NOT NULL,
  patient_phone VARCHAR(20) NOT NULL,
  blood_group CHAR(3) NOT NULL,
  requested_units INT NOT NULL,
  request_reason TEXT NOT NULL,
  request_status ENUM('Pending', 'Approved', 'Denied') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table to store blood bank data
CREATE TABLE blood_bank (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blood_group CHAR(3) NOT NULL,
  total_units INT NOT NULL,
  available_units INT NOT NULL,
  last_update DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table to store user accounts
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;