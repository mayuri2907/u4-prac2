import { NavLink, Outlet } from 'react-router-dom';

function Orders() {
  const tabClass = ({ isActive }) =>
    isActive
      ? 'px-4 py-2 border-b-2 border-slate-900 font-semibold text-slate-900 text-sm'
      : 'px-4 py-2 text-slate-500 hover:text-slate-700 text-sm font-medium';

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 rounded border border-amber-200">
            Parent Route: /orders
          </span>
          <h1 className="text-2xl font-bold text-slate-800 mt-2">
            E-Commerce Order Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Click any tab below to swap child routes inside the &lt;Outlet /&gt; component dynamically.
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex space-x-2 border-b border-slate-200">
        <NavLink to="/orders/current" className={tabClass}>
          Current Orders
        </NavLink>
        <NavLink to="/orders/history" className={tabClass}>
          Order History
        </NavLink>
        <NavLink to="/orders/cancelled" className={tabClass}>
          Cancelled Orders
        </NavLink>
      </div>

      {/* Dynamic Nested Route Content */}
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
