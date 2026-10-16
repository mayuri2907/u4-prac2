import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import CurrentOrders from './pages/orders/CurrentOrders';
import OrderHistory from './pages/orders/OrderHistory';
import CancelledOrders from './pages/orders/CancelledOrders';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />

        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">Practical 2: Nested Routing</h2>
            <p className="text-sm text-gray-500">Order Management with nested routes using &lt;Outlet /&gt;</p>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Nested Route */}
            <Route path="/orders" element={<Orders />}>
              <Route index element={<Navigate to="current" replace />} />
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
