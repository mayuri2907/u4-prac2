import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'px-3 py-2 rounded-md text-sm font-medium bg-slate-800 text-white'
      : 'px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors';

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-xl font-bold text-slate-800">
              OrderHub<span className="text-amber-600">.</span>
            </Link>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
              Nested Routes Demo
            </span>
          </div>

          <div className="flex space-x-2">
            <NavLink to="/" className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/orders" className={navLinkClass}>
              Orders Management
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
