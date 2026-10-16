import { NavLink, Outlet } from 'react-router-dom';

function Orders() {
  const getTabClass = ({ isActive }) =>
    isActive
      ? 'px-4 py-2 border-b-2 border-blue-600 font-semibold text-blue-600 text-sm'
      : 'px-4 py-2 text-gray-500 hover:text-gray-700 text-sm font-medium';

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-800">Orders Management</h2>
        <p className="text-sm text-gray-500">Manage all your customer orders below.</p>
      </div>

      {/* Nested Route Tabs */}
      <div className="flex space-x-2 border-b border-gray-200">
        <NavLink to="/orders/current" className={getTabClass}>
          Current Orders
        </NavLink>
        <NavLink to="/orders/history" className={getTabClass}>
          Order History
        </NavLink>
        <NavLink to="/orders/cancelled" className={getTabClass}>
          Cancelled Orders
        </NavLink>
      </div>

      {/* Child route renders here */}
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
