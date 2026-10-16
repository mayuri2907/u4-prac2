import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full mb-3 border border-amber-200">
          E-Commerce Management
        </span>
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          Welcome to Order Management System
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
          This application demonstrates <strong>Nested Routing</strong> in React Router. Inside the parent 
          <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono mx-1">/orders</code> route, 
          child routes are rendered dynamically using the <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">&lt;Outlet /&gt;</code> component.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/orders/current"
            className="px-5 py-2.5 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors shadow-sm"
          >
            Go to Current Orders →
          </Link>
          <Link
            to="/orders/history"
            className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border border-slate-300"
          >
            View Past History
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-1">Parent Route: /orders</h3>
          <p className="text-sm text-slate-600">
            Acts as the main layout containing persistent navigation tabs and the &lt;Outlet /&gt; placeholder.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-1">Child Route: current</h3>
          <p className="text-sm text-slate-600">
            Resolves at <code className="font-mono text-xs bg-slate-100 px-1">/orders/current</code> to view live shipments.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-1">Child Route: cancelled</h3>
          <p className="text-sm text-slate-600">
            Resolves at <code className="font-mono text-xs bg-slate-100 px-1">/orders/cancelled</code> to view refunds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
