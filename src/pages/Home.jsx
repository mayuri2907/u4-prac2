import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Welcome to E-Commerce Portal</h2>
      <p className="text-gray-600">
        This application demonstrates <strong>Nested Routing</strong> in React Router.
      </p>
      <p className="text-gray-600">
        Inside the main <code>/orders</code> page, there are nested sub-routes to view Current Orders, Order History, and Cancelled Orders using <code>&lt;Outlet /&gt;</code>.
      </p>
      <div>
        <Link
          to="/orders/current"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700"
        >
          View Orders →
        </Link>
      </div>
    </div>
  );
}

export default Home;
