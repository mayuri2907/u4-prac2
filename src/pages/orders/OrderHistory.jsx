function OrderHistory() {
  const historyOrders = [
    {
      id: 'ORD-7710',
      product: 'Dell UltraSharp 27" 4K USB-C Hub Monitor (U2723QE)',
      date: '02 Oct 2026',
      deliveredOn: '05 Oct 2026',
      total: '₹48,990',
      status: 'Delivered',
    },
    {
      id: 'ORD-6540',
      product: 'SanDisk 1TB Extreme Portable SSD 1050MB/s',
      date: '15 Sep 2026',
      deliveredOn: '18 Sep 2026',
      total: '₹9,499',
      status: 'Delivered',
    },
    {
      id: 'ORD-5120',
      product: 'Ergonomic Mesh Office Chair with Lumbar Support',
      date: '28 Aug 2026',
      deliveredOn: '02 Sep 2026',
      total: '₹14,200',
      status: 'Delivered',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Delivered Orders History</h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
          {historyOrders.length} Completed
        </span>
      </div>

      <div className="space-y-3">
        {historyOrders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-white rounded-lg border border-slate-200 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500">{order.id}</span>
                <h4 className="text-base font-semibold text-slate-800">{order.product}</h4>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-slate-800">{order.total}</span>
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded border mt-1 bg-stone-100 text-stone-700 border-stone-200">
                  ✓ {order.status}
                </span>
              </div>
            </div>
            <div className="pt-2 flex justify-between text-xs text-slate-500">
              <span>Ordered: {order.date}</span>
              <span className="text-slate-700">Delivered on {order.deliveredOn}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
