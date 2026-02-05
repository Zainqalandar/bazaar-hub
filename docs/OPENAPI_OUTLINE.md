# BazaarHub API Outline

## Auth
- POST /auth/register
- POST /auth/login
- POST /auth/refresh
- POST /auth/logout

## Products
- GET /products
- GET /products/{id}
- POST /seller/products
- PATCH /seller/products/{id}
- DELETE /seller/products/{id}

## Cart
- GET /cart
- POST /cart/add
- PATCH /cart/update
- DELETE /cart/remove/{productId}

## Orders
- POST /orders/checkout
- GET /orders/my
- GET /seller/orders
- PATCH /seller/orders/{id}/status

## Admin
- GET /admin/dashboard
- GET /admin/sellers
- PATCH /admin/sellers/{id}/approve
- PATCH /admin/users/{id}/block
