-- LbisTech Website Database Schema
-- PostgreSQL Database Setup for Ubuntu Server

-- Enable UUID extension (required for UUID primary keys)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact Submissions Table
-- Stores all contact form submissions from the website
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
-- Stores all course enrollment submissions
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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_course_interest ON contact_submissions(course_interest);

CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_email ON enrollment_submissions(email);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_course_id ON enrollment_submissions(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_status ON enrollment_submissions(status);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_created_at ON enrollment_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enrollment_submissions_is_free ON enrollment_submissions(is_free);

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to automatically update updated_at when records are modified
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enrollment_submissions_updated_at
    BEFORE UPDATE ON enrollment_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for testing (optional - remove in production)
INSERT INTO contact_submissions (first_name, last_name, email, phone, course_interest, message) VALUES
('John', 'Doe', 'john.doe@example.com', '+92300123456', 'aws-2-in-1', 'I am interested in AWS certification course. Please provide more details about the curriculum and schedule.'),
('Sarah', 'Khan', 'sarah.khan@example.com', '+92301234567', 'devops-engineering', 'Looking for comprehensive DevOps training. What are the prerequisites and job placement assistance?'),
('Ahmed', 'Ali', 'ahmed.ali@example.com', '+92302345678', 'azure-2-in-1', 'Want to know about Azure certification courses and their duration.');

INSERT INTO enrollment_submissions (course_id, first_name, last_name, email, phone, experience_level, learning_goals, is_free) VALUES
('open-source-voip', 'Ali', 'Ahmed', 'ali.ahmed@example.com', '+92302345678', 'beginner', 'Want to learn VoIP technologies for my telecom business startup', true),
('aws-2-in-1', 'Fatima', 'Sheikh', 'fatima.sheikh@example.com', '+92303456789', 'intermediate', 'Need AWS certification for career advancement in cloud computing', false),
('docker', 'Hassan', 'Malik', 'hassan.malik@example.com', '+92304567890', 'beginner', 'Learning containerization for my development projects', false);

-- Create a view for admin dashboard statistics
CREATE OR REPLACE VIEW admin_stats AS
SELECT 
    (SELECT COUNT(*) FROM contact_submissions) as total_contacts,
    (SELECT COUNT(*) FROM contact_submissions WHERE status = 'new') as new_contacts,
    (SELECT COUNT(*) FROM enrollment_submissions) as total_enrollments,
    (SELECT COUNT(*) FROM enrollment_submissions WHERE status = 'pending') as pending_enrollments,
    (SELECT COUNT(*) FROM enrollment_submissions WHERE is_free = true) as free_enrollments,
    (SELECT COUNT(*) FROM enrollment_submissions WHERE is_free = false) as paid_enrollments,
    (SELECT COUNT(*) FROM contact_submissions WHERE DATE(created_at) = CURRENT_DATE) as today_contacts,
    (SELECT COUNT(*) FROM enrollment_submissions WHERE DATE(created_at) = CURRENT_DATE) as today_enrollments;

-- Create a view for recent activity
CREATE OR REPLACE VIEW recent_activity AS
SELECT 
    'contact' as type,
    id,
    first_name || ' ' || last_name as name,
    email,
    course_interest as course,
    status,
    created_at
FROM contact_submissions
UNION ALL
SELECT 
    'enrollment' as type,
    id,
    first_name || ' ' || last_name as name,
    email,
    course_id as course,
    status,
    created_at
FROM enrollment_submissions
ORDER BY created_at DESC
LIMIT 50;

-- Grant permissions (adjust username as needed)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO lbistech_user;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lbistech_user;
-- GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO lbistech_user;

-- Display success message
DO $$
BEGIN
    RAISE NOTICE 'LbisTech database schema created successfully!';
    RAISE NOTICE 'Tables created: contact_submissions, enrollment_submissions';
    RAISE NOTICE 'Sample data inserted for testing';
    RAISE NOTICE 'Views created: admin_stats, recent_activity';
END $$;