import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  const [totalPatients, setTotalPatients] = useState(0);
  const [upcomingAppointments, setUpcomingAppointments] = useState(0);
  const [completedTreatments, setCompletedTreatments] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);

  useEffect(() => {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const incidents = JSON.parse(localStorage.getItem('incidents')) || [];

    const today = new Date();
    const thisMonth = today.getMonth();
    const thisYear = today.getFullYear();

    const upcoming = incidents.filter(i => new Date(i.appointmentDate) > today);
    const completed = incidents.filter(i => i.status?.toLowerCase() === 'completed' || i.status?.toLowerCase() === 'done');
    const revenue = incidents.reduce((sum, i) => {
      const date = new Date(i.appointmentDate);
      const cost = parseFloat(i.cost) || 0;
      return (date.getMonth() === thisMonth && date.getFullYear() === thisYear) ? sum + cost : sum;
    }, 0);

    setTotalPatients(patients.length);
    setUpcomingAppointments(upcoming.length);
    setCompletedTreatments(completed.length);
    setMonthlyRevenue(revenue);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login';
  };

  return (
    <AdminLayout>
      <div className="bg-gray-100 min-h-screen p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800"> Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         <KPIBox label="Total Patients" value={totalPatients} icon="👥" />
<KPIBox label="Upcoming Appointments" value={upcomingAppointments} icon="📅" />
<KPIBox label="Completed Treatments" value={completedTreatments} icon="✅" />
<KPIBox label="Monthly Revenue (₹)" value={monthlyRevenue.toLocaleString()} icon="💰" />


        </div>
      </div>
    </AdminLayout>
  );
};

const KPIBox = ({ label, value, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition space-y-2">
    <div className="flex items-center justify-between text-sm text-slate-500">
      <span>{label}</span>
      <span className="text-indigo-500 text-xl">{icon}</span>
    </div>
    <div className="text-3xl font-bold text-indigo-800">{value}</div>
  </div>
);



export default AdminDashboard;
