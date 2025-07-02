import Sidebar from './SidebarTemp';

const AdminLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <Sidebar role="Admin" />

      {/* 👉 Main content area to the right of the sidebar */}
      <div className="ml-64 w-full min-h-screen bg-slate-50">
        
        {/* Header bar at the top */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-semibold text-indigo-700">Admin Dashboard</h1>
          <div className="text-sm text-slate-600">
            Logged in as: <span className="font-medium">{user?.email}</span>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
