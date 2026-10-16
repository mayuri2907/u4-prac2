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
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
        {/* Navigation */}
        <Navbar />

        {/* Practical Sub-header */}
        <div className="bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-600 gap-1">
            <div>
              <span className="font-semibold text-slate-800">Practical 2:</span> Nested Routing (Order Management with &lt;Outlet /&gt;)
            </div>
            <div className="text-amber-800 font-medium">
              ● Unit 4 – Client-Side Routing
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Nested Route Definition */}
            <Route path="/orders" element={<Orders />}>
              {/* Default redirect or index to current orders */}
              <Route index element={<Navigate to="current" replace />} />
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          React Practical 2 | E-commerce Order Management Nested Routing
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
