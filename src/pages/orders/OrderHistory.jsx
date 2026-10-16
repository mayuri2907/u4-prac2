function OrderHistory() {
  const pastOrders = [
    { id: 98, item: 'Bluetooth Headphones', date: '10 Oct 2026', total: '₹2,499', status: 'Delivered' },
    { id: 95, item: 'Mechanical Keyboard', date: '02 Oct 2026', total: '₹3,199', status: 'Delivered' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Delivered Orders History</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border border-gray-200">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 border-b">Order ID</th>
              <th className="p-3 border-b">Item</th>
              <th className="p-3 border-b">Delivery Date</th>
              <th className="p-3 border-b">Total</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {pastOrders.map((o) => (
              <tr key={o.id}>
                <td className="p-3 font-mono">#{o.id}</td>
                <td className="p-3">{o.item}</td>
                <td className="p-3">{o.date}</td>
                <td className="p-3">{o.total}</td>
                <td className="p-3 text-green-600 font-medium">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;
