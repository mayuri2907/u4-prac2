# Practical 2: Nested Routing

## Aim
Develop an E-commerce Order Management application where the Orders page contains nested routes such as Current Orders, Order History, and Cancelled Orders.

## Description
This practical demonstrates nested routing using `react-router-dom`. The parent `/orders` route contains an `<Outlet />` component where child routes (`/orders/current`, `/orders/history`, and `/orders/cancelled`) are rendered depending on user selection.

## Components Created
- `Navbar.jsx`: Top navigation.
- `Home.jsx`: Welcome landing page.
- `Orders.jsx`: Parent orders page containing sub-navigation tabs and `<Outlet />`.
- `CurrentOrders.jsx`: Shows in-transit and active orders.
- `OrderHistory.jsx`: Shows completed delivered orders.
- `CancelledOrders.jsx`: Shows cancelled orders.

## How to Run
```bash
npm install
npm run dev
```
