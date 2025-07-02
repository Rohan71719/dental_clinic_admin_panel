import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const handleLogin = (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const foundUser = users.find((u) => u.email === input || u.contact === input);

  if (!foundUser) {
    setError("User not found.");
  } else if (foundUser.password !== password) {
    setError("Incorrect password.");
  } else {
    localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
    navigate(`/${foundUser.role.toLowerCase()}/dashboard`);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md border border-indigo-100">
        <div className="text-center mb-6">
          <div className="text-4xl">🦷</div>
          <h2 className="text-2xl font-bold text-indigo-700 mt-2">Dental Center Login</h2>
          <p className="text-sm text-slate-500">Welcome back! Please login to continue.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700">Email or Contact</label>
            <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 bg-white mt-1 shadow-sm">
              <Mail size={18} className="text-slate-400 mr-2" />
              <input
                type="text"
                className="w-full outline-none text-sm"
                placeholder="you@example.com or 9876543210"
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition"
          >
            Login
          </button>

          <p className="text-sm text-slate-600 text-center">
  Don't have an account?{' '}
  <a href="/signup" className="text-indigo-600 underline hover:text-indigo-800">
    Sign up
  </a>
</p>

        </form>
      </div>
    </div>
  );
};

export default Login;
