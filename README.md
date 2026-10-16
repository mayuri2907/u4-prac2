# Practical 2: Nested Routing (Unit 4)

## Aim
Develop an E-commerce Order Management application where the Orders page contains nested routes such as **Current Orders**, **Order History**, and **Cancelled Orders**.

## GitHub Repository
`https://github.com/mayuri2907/u4-prac2.git`

## Concepts Implemented
- **Nested Routing**: Defined `<Route path="/orders" element={<Orders />}>` enclosing child routes:
  - `path="current"` -> `<CurrentOrders />`
  - `path="history"` -> `<OrderHistory />`
  - `path="cancelled"` -> `<CancelledOrders />`
- **&lt;Outlet /&gt;**: Renders the active child route component inside the parent layout.
- **&lt;NavLink&gt;**: Provides active tab highlighting automatically.
- **Tailwind CSS**: Light-themed modern interface.

## How to Run Locally
```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
```

## Push to GitHub
```bash
git remote add origin https://github.com/mayuri2907/u4-prac2.git
git branch -M main
git push -u origin main
```
