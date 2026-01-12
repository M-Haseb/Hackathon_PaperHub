# PaperHub

PaperHub is a student-focused web platform that provides fast and organized access to past papers, including Mids, Finals, Quizzes, and Assignments. It addresses the common problem of scattered academic resources across WhatsApp groups and chat histories by centralizing them in a single, easy-to-use website.

## Project Overview

Students often struggle to find past papers when they need them most, especially near exams. PaperHub allows students to find and download a specific paper in under 30 seconds, compared to scrolling through weeks of messages. This project is developed as a Minimum Viable Product (MVP) based on real user research and validation.

## Team Members

- M. Haseeb – L1S23BSCS0336  
- Ali Hamza – L1S23BSCS0321  
- Faisal Khalid – L1F23BSCS0192  

## User Research and Validation

### Key Learnings
- Students are frustrated with finding past papers.
- Past papers are essential because they reflect real exam patterns.
- Students mainly use such platforms near exams, not daily.
- Most students prefer downloading PDFs instead of viewing them online.
- Academic resources are scattered and lack a unified platform.

### Design Changes Based on Feedback
Initially, the navigation consisted of four screens: Department, Program, Subject, and Past Papers. By using Async Storage to save the user’s Department and Program, the flow was reduced to two screens: Subject and Past Papers, resulting in a better user experience.

### Validated and Disproved Assumptions
Validated assumptions include the strong need for past papers and the requirement for a unified platform. Disproved assumptions include daily usage of the platform and preference for online viewing over PDF downloads.

## Data Sources

- Survey data from over 1000 students
- WhatsApp chat data from FOIT CS Department groups

## MVP Scope and Features

### Included Features
- Mid-term papers
- Final exam papers
- Quizzes
- Assignments
All materials are accessible within a single website with structured navigation and search.

### Out of Scope
- Rating system for past papers
- Student reviews

## Value to Users

PaperHub provides quick and easy access to downloadable past papers, saving students significant time during exam preparation and removing dependency on unorganized chat histories.

## Technical Stack

Frontend: React.js with Tailwind CSS  
Backend: Node.js with Express.js  
Database: Supabase or Firebase  
Deployment: Vercel

## Feature Prioritization

High priority features include the database structure (Department → Subject → File) and search functionality. Medium priority is focused on creating a clean and visually appealing user interface.

## Challenges and Mitigation

The biggest challenge is data entry and collection. This is addressed by focusing on a single department (FOIT) as a proof of concept rather than attempting to populate the entire university’s data within a limited timeframe.

## Project Status

This project is currently an MVP under development and intended for educational and academic use.
>>>>>>> 33b203c34fab2d3b2d5a13e0820817cf60f897df
