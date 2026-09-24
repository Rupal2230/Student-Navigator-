-- ====================================================================
-- PROJECT: Student Opportunity & Government Benefit Navigator
-- TOOLS: MySQL Workbench 8.0+ | Visual Studio Code | Node.js | Express.js
-- OS: Windows 10 / 11 | Browser: Google Chrome
-- ====================================================================

-- 1. Create the database
DROP DATABASE IF EXISTS student_opportunity_db;
CREATE DATABASE student_opportunity_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE student_opportunity_db;

-- 2. Table: students
-- Privacy rule: No original documents or certificates stored
CREATE TABLE IF NOT EXISTS students (
    student_id VARCHAR(64) PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    date_of_birth DATE,
    age INT UNSIGNED NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    education_level ENUM('10th', '11th-12th', 'diploma', 'iti', 'degree', 'postgraduate') NOT NULL,
    standard_year VARCHAR(80) NOT NULL,
    stream ENUM('general', 'arts', 'commerce', 'science', 'engineering', 'medical', 'vocational') NOT NULL,
    state VARCHAR(50) DEFAULT 'Maharashtra',
    district VARCHAR(60) NOT NULL,
    is_maharashtra_domicile BOOLEAN DEFAULT TRUE,
    category ENUM('open', 'obc', 'sc', 'st', 'vjnt', 'sbc', 'ews', 'minority') NOT NULL,
    annual_income_range ENUM('below_1l', '1l_to_2_5l', '2_5l_to_8l', 'above_8l') NOT NULL,
    academic_percentage DECIMAL(5,2) DEFAULT 0.00,
    hostel_resident BOOLEAN DEFAULT FALSE,
    has_disability BOOLEAN DEFAULT FALSE,
    first_gen_learner BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_matching (education_level, stream, category, annual_income_range)
) ENGINE=InnoDB;

-- 3. Table: schemes
CREATE TABLE IF NOT EXISTS schemes (
    scheme_id VARCHAR(64) PRIMARY KEY,
    scheme_code VARCHAR(30) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    government_level ENUM('state', 'central') DEFAULT 'state',
    max_annual_income DECIMAL(10,2) DEFAULT 0.00,
    min_percentage DECIMAL(5,2) DEFAULT 0.00,
    gender_requirement ENUM('all', 'male', 'female') DEFAULT 'all',
    requires_hostel BOOLEAN DEFAULT FALSE,
    requires_disability BOOLEAN DEFAULT FALSE,
    deadline DATE NOT NULL,
    deadline_status ENUM('open_urgent', 'open_warning', 'open_normal', 'open_rolling', 'closed') DEFAULT 'open_normal',
    official_portal_url VARCHAR(500) NOT NULL,
    last_verified_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 4. Table: scheme_documents (Checklist guidance only, no upload)
CREATE TABLE IF NOT EXISTS scheme_documents (
    document_id VARCHAR(64) PRIMARY KEY,
    scheme_id VARCHAR(64) NOT NULL,
    doc_name VARCHAR(150) NOT NULL,
    issuing_authority VARCHAR(200) NOT NULL,
    how_to_obtain TEXT NOT NULL,
    is_mandatory BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (scheme_id) REFERENCES schemes(scheme_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 5. Table: student_scheme_tracking (Student self-reported status)
CREATE TABLE IF NOT EXISTS student_scheme_tracking (
    tracking_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(64) NOT NULL,
    scheme_id VARCHAR(64) NOT NULL,
    status ENUM('interested', 'preparing', 'applied', 'need_help') DEFAULT 'interested',
    ready_documents_count INT DEFAULT 0,
    last_action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_student_scheme (student_id, scheme_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (scheme_id) REFERENCES schemes(scheme_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6. Table: counsellor_followup_logs (Teacher / Counsellor Triage)
CREATE TABLE IF NOT EXISTS counsellor_followup_logs (
    log_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id VARCHAR(64) NOT NULL,
    scheme_id VARCHAR(64) NOT NULL,
    counsellor_id VARCHAR(64) NOT NULL,
    action_type ENUM('guidance_given', 'documents_assisted', 'parent_contacted', 'resolved') NOT NULL,
    counsellor_notes TEXT,
    followup_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (scheme_id) REFERENCES schemes(scheme_id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 7. Table: scheme_outdated_reports (Community updates on GR changes)
CREATE TABLE IF NOT EXISTS scheme_outdated_reports (
    report_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    scheme_id VARCHAR(64) NOT NULL,
    reporter_role ENUM('student', 'teacher', 'admin') NOT NULL,
    issue_type VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    source_url VARCHAR(500),
    status ENUM('pending', 'verified', 'dismissed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ====================================================================
-- SAMPLE DATA INSERTION (Test in MySQL Workbench)
-- ====================================================================

INSERT INTO schemes (
    scheme_id, scheme_code, title, department, government_level, 
    max_annual_income, min_percentage, gender_requirement, 
    requires_hostel, requires_disability, deadline, deadline_status, 
    official_portal_url, last_verified_date
) VALUES 
(
    'rcsm-ebc', 'MAHA-EBC-2026', 
    'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna (EBC)', 
    'Directorate of Higher & Technical Education (DTE), Maharashtra', 
    'state', 800000.00, 50.00, 'all', FALSE, FALSE, 
    '2026-10-15', 'open_warning', 'https://mahadbt.maharashtra.gov.in', '2026-09-18'
),
(
    'panjabrao-deshmukh-hostel', 'MAHA-PD-HOSTEL', 
    'Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna', 
    'Higher & Technical Education Department, Maharashtra', 
    'state', 800000.00, 0.00, 'all', TRUE, FALSE, 
    '2026-11-15', 'open_normal', 'https://mahadbt.maharashtra.gov.in', '2026-09-15'
),
(
    'post-matric-sc', 'MAHA-SC-POSTMATRIC', 
    'Government of India Post-Matric Scholarship for SC Students (Maharashtra)', 
    'Social Justice and Special Assistance Department, Maharashtra', 
    'state', 250000.00, 0.00, 'all', FALSE, FALSE, 
    '2026-10-31', 'open_warning', 'https://mahadbt.maharashtra.gov.in', '2026-09-19'
),
(
    'post-matric-obc-vjnt', 'MAHA-OBC-POSTMATRIC', 
    'Post Matric Scholarship to OBC / VJNT / SBC Students', 
    'OBC, VJNT & SBC Welfare Department, Maharashtra', 
    'state', 150000.00, 0.00, 'all', FALSE, FALSE, 
    '2026-10-25', 'open_urgent', 'https://mahadbt.maharashtra.gov.in', '2026-09-20'
),
(
    'savitribai-phule-scholarship', 'MAHA-SAVITRIBAI', 
    'Savitribai Phule Scholarship for Girl Students', 
    'Social Justice & Special Assistance Department, Maharashtra', 
    'state', 0.00, 0.00, 'female', FALSE, FALSE, 
    '2026-10-15', 'open_urgent', 'https://mahadbt.maharashtra.gov.in', '2026-09-15'
);

INSERT INTO students (
    student_id, full_name, age, gender, education_level, standard_year, 
    stream, district, category, annual_income_range, academic_percentage, 
    hostel_resident, has_disability, first_gen_learner
) VALUES 
('stud-01', 'Pooja Sanjay Jadhav', 17, 'female', '11th-12th', '12th Science', 'science', 'Pune', 'obc', '1l_to_2_5l', 84.50, FALSE, FALSE, TRUE),
('stud-02', 'Rahul Tukaram Shinde', 20, 'male', 'degree', '2nd Year B.Tech', 'engineering', 'Nashik', 'open', '2_5l_to_8l', 72.80, TRUE, FALSE, FALSE),
('stud-03', 'Snehal Ramesh Gaikwad', 19, 'female', 'diploma', '3rd Year Mechanical', 'engineering', 'Amravati', 'sc', 'below_1l', 79.20, FALSE, FALSE, TRUE);

-- Verify queries in MySQL Workbench:
-- SELECT * FROM schemes;
-- SELECT * FROM students;
-- SELECT s.full_name, sc.title, sc.deadline FROM students s JOIN schemes sc;
