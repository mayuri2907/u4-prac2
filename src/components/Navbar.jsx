import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-lg font-bold text-gray-800">Order Management</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Home
          </Link>
          <Link to="/orders" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
