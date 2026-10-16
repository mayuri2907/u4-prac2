function CancelledOrders() {
  const cancelledOrders = [
    {
      id: 'ORD-4402',
      product: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
      date: '20 Sep 2026',
      total: '₹26,990',
      reason: 'Ordered by mistake; wanted Silver edition instead.',
      refundStatus: 'Refunded (Credited to HDFC Bank A/c)',
    },
    {
      id: 'ORD-3910',
      product: 'Apple Magic Trackpad - White Multi-Touch Surface',
      date: '05 Aug 2026',
      total: '₹11,500',
      reason: 'Delivery delayed beyond expected deadline.',
      refundStatus: 'Refunded (Original Payment Method)',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-800">Cancelled Orders & Refunds</h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
          {cancelledOrders.length} Cancelled
        </span>
      </div>

      <div className="space-y-3">
        {cancelledOrders.map((order) => (
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
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded border mt-1 bg-red-50 text-red-700 border-red-200">
                  ✕ Cancelled
                </span>
              </div>
            </div>
            <div className="pt-2 text-xs text-slate-600 space-y-1">
              <div><strong className="text-slate-700">Reason:</strong> {order.reason}</div>
              <div className="text-emerald-700 font-medium">✓ {order.refundStatus}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CancelledOrders;
