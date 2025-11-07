import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Payment Management", path: "/admin/payments" },
    { label: "Parent Management", path: "/admin/parents" },
    { label: "Teacher Management", path: "/admin/teachers" },
  ];

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-brand-green">Kiddie Admin</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-6 py-3 transition-colors ${
                  isActive ? "bg-brand-green text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

