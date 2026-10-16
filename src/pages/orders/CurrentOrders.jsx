function CurrentOrders() {
  const currentOrders = [
    {
      id: 'ORD-9821',
      product: 'Logitech MX Master 3S Wireless Mouse',
      date: '14 Oct 2026',
      total: '₹7,499',
      status: 'Out for Delivery',
      eta: 'Expected by Today, 6:00 PM',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'ORD-9825',
      product: 'Keychron K2 Mechanical Keyboard (Hot-swappable)',
      date: '15 Oct 2026',
      total: '₹8,299',
      status: 'Shipped (In Transit)',
      eta: 'Expected by 18 Oct 2026',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'ORD-9830',
      product: 'Anker 65W GaN Fast Charger with Type-C Cable',
      date: '16 Oct 2026',
      total: '₹2,499',
      status: 'Order Placed & Packed',
      eta: 'Expected by 20 Oct 2026',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Active Shipments</h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
          {currentOrders.length} In-Progress
        </span>
      </div>

      <div className="space-y-3">
        {currentOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500">{order.id}</span>
                <h4 className="text-base font-semibold text-slate-800">{order.product}</h4>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-slate-800">{order.total}</span>
                <span className={`block text-xs font-semibold px-2 py-0.5 rounded border mt-1 ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row justify-between text-xs text-slate-500">
              <span>Placed on: {order.date}</span>
              <span className="font-medium text-emerald-700">{order.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;
