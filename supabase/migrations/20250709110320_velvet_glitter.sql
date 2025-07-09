-- LbisTech Website Database Schema
-- PostgreSQL Database Setup

-- Create database (run this as postgres user)
-- CREATE DATABASE lbistech_website;
-- \c lbistech_website;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    course_interest VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enrollment Submissions Table
CREATE TABLE IF NOT EXISTS enrollment_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    experience_level VARCHAR(50),
    learning_goals TEXT,
    is_free BOOLEAN DEFAULT false,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'enrolled', 'payment_pending', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_email ON enrollment_submissions(email);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_course_id ON enrollment_submissions(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_status ON enrollment_submissions(status);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_created_at ON enrollment_submissions(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enrollment_submissions_updated_at
    BEFORE UPDATE ON enrollment_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing
INSERT INTO contact_submissions (first_name, last_name, email, phone, course_interest, message) VALUES
('John', 'Doe', 'john.doe@example.com', '+92300123456', 'aws-2-in-1', 'I am interested in AWS certification course. Please provide more details.'),
('Sarah', 'Khan', 'sarah.khan@example.com', '+92301234567', 'devops-engineering', 'Looking for comprehensive DevOps training. What are the prerequisites?');

INSERT INTO enrollment_submissions (course_id, first_name, last_name, email, phone, experience_level, learning_goals, is_free) VALUES
('open-source-voip', 'Ali', 'Ahmed', 'ali.ahmed@example.com', '+92302345678', 'beginner', 'Want to learn VoIP technologies for my telecom business', true),
('aws-2-in-1', 'Fatima', 'Sheikh', 'fatima.sheikh@example.com', '+92303456789', 'intermediate', 'Need AWS certification for career advancement', false);