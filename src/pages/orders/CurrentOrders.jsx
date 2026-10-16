function CurrentOrders() {
  const orders = [
    { id: 101, item: 'Wireless Mouse', qty: 1, price: '₹699', status: 'In Transit' },
    { id: 102, item: 'USB-C Cable', qty: 2, price: '₹399', status: 'Dispatched' },
    { id: 103, item: 'Laptop Stand', qty: 1, price: '₹1,299', status: 'Processing' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Current Active Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border border-gray-200">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-3 border-b">Order ID</th>
              <th className="p-3 border-b">Item</th>
              <th className="p-3 border-b">Quantity</th>
              <th className="p-3 border-b">Price</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="p-3 font-mono">#{o.id}</td>
                <td className="p-3">{o.item}</td>
                <td className="p-3">{o.qty}</td>
                <td className="p-3">{o.price}</td>
                <td className="p-3 text-blue-600 font-medium">{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CurrentOrders;
