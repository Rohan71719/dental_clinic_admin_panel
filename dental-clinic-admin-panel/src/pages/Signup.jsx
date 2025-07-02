import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Lock, User } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const exists = users.find(
      (u) => u.email === email || u.contact === contact
    );

    if (exists) {
      setError('User already exists with this email or contact.');
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      contact,
      password,
      role: 'Patient',
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md border border-indigo-100">
        <div className="text-center mb-6">
          <div className="text-4xl">🦷</div>
          <h2 className="text-2xl font-bold text-indigo-700 mt-2">Create Account</h2>
          <p className="text-sm text-slate-500">Register as a Patient to get started.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-white mt-1 shadow-sm">
              <User size={18} className="text-slate-400 mr-2" />
              <input
                type="text"
                className="w-full outline-none text-sm"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-white mt-1 shadow-sm">
              <Mail size={18} className="text-slate-400 mr-2" />
              <input
                type="email"
                className="w-full outline-none text-sm"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Contact Number</label>
            <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-white mt-1 shadow-sm">
              <Phone size={18} className="text-slate-400 mr-2" />
              <input
                type="tel"
                className="w-full outline-none text-sm"
                placeholder="9876543210"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-white mt-1 shadow-sm">
              <Lock size={18} className="text-slate-400 mr-2" />
              <input
                type="password"
                className="w-full outline-none text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-slate-600 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 underline hover:text-indigo-800">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
