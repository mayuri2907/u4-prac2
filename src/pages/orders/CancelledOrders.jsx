function CancelledOrders() {
  const cancelled = [
    { id: 91, item: 'Webcam 1080p', refund: 'Refunded', reason: 'Ordered by mistake' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Cancelled Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border border-gray-200">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 border-b">Order ID</th>
              <th className="p-3 border-b">Item</th>
              <th className="p-3 border-b">Cancellation Reason</th>
              <th className="p-3 border-b">Refund Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {cancelled.map((o) => (
              <tr key={o.id}>
                <td className="p-3 font-mono">#{o.id}</td>
                <td className="p-3">{o.item}</td>
                <td className="p-3">{o.reason}</td>
                <td className="p-3 text-red-600 font-medium">{o.refund}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CancelledOrders;
