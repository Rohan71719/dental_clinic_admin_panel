import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LogOut, Menu, Calendar, Users, LayoutDashboard, User, X
} from 'lucide-react';

const Sidebar = ({ role }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const links = role === 'Admin'
    ? [
        { to: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
        { to: '/admin/patients', label: 'Patients', icon: <Users size={18} /> },
        { to: '/admin/calendar', label: 'Calendar', icon: <Calendar size={18} /> },
      ]
    : [
        { to: '/patient/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
        { to: '/patient/profile', label: 'Profile', icon: <User size={18} /> },
      ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white w-64 p-6 border-r shadow fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold text-indigo-700 mb-8">🦷 Dental Center</h2>

        {/* Nav Links */}
        <nav className="space-y-1">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition text-sm ${
               location.pathname === link.to
        ? 'bg-indigo-100 text-indigo-700 font-semibold'
         : 'text-slate-700 hover:bg-slate-100'

              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-10 border-t pt-4 text-sm">
          <p className="text-xs mb-1 text-gray-400">Logged in as:</p>
          <div className="font-semibold">{user?.email || 'User'}</div>
          <div className="text-xs text-gray-500 mb-3">{user?.role}</div>
          <button
            onClick={() => {
              localStorage.removeItem('loggedInUser');
              window.location.href = '/login';
            }}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
