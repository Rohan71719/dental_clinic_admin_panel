# dental_clinic_admin_panel

🦷 ENTNT Dental Center – Patient & Admin Portal
Welcome to the ENTNT Dental Center Management System — a modern, responsive web application built to streamline clinic operations for both administrators and patients.

Developed using React and Tailwind CSS, the portal offers a clean UI, role-based access control, and localStorage-powered data handling for seamless offline simulation.

✨ Key Features:

  👩‍⚕️ Admin Portal:
  
      🔐 Secure login & sign-up (Email & Password)
      📊 Dashboard with KPIs: Total Patients, Revenue, Treatments
      👥 Patient Management: Add, Edit, Delete Records
      📁 Treatment & Incident History: Record and view full logs
       🗓 Appointment Calendar: View appointments in calendar format

  🧑 Patient Portal:
  
        📱 Login via Email/Contact Number & Password
        📅 View Upcoming Appointments
        📝 Edit and View Profile
        🧾 Access Treatment History

📁 Folder Structure:


src/

├── components/        # Shared layouts and ProtectedRoute wrapper
├── pages/
│   ├── admin/         # Admin views: Dashboard, Patients, Calendar, Incidents
│   └── patient/       # Patient views: Dashboard, Profile
├── data/              # Initial seed data (users, patients)
├── App.js             # Entry point with localStorage seeding
├── AppRouter.js       # Role-based routing using React Router

🔐 Credentials:

        Role: Login Info
        Admin Email: admin@entnt.in            patient Email/ contact: john@entnt.in/ 1234567890
        Admin Password: admin123               password : patient123
       

🛠️ Tech Stack:

      ⚛️ React 19
      🧭 React Router DOM v7
      🎨 Tailwind CSS
      🗃️ LocalStorage (Mock Backend)
      📆 React Calendar
      🧪 PostCSS + Autoprefixer


⚙️ Getting Started:

       1.📦 Install Dependencies bash Copy Edit     (--npm install)
       2.🧪 Run the App bash Copy Edit npm start Open http://localhost:3000 in your browser.
       3.📦 Build for Production bash Copy Edit npm run build
       4. 🧹 Reset Local Storage (if needed) To reinitialize users/patients data:
       5. Run the App  (---npm start)

🏗️ Build for Production:

              (---npm run build)
              
🧹 Reset Local Storage (Optional):

--Open Developer Tools → Application Tab
    --Navigate to Local Storage
    --Clear these keys: users, patients, incidents
    --Refresh the app

👨‍💻 Author:

--Developed by Rohan Sen as part of the ENTNT Dental Center assignment.
        This project demonstrates modern frontend development skills with React, Tailwind CSS, and localStorage-based simulation.

Fully styled using Tailwind CSS
Designed for learning, experimentation, and portfolio use

