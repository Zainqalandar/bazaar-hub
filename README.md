# BazaarHub

BazaarHub is a multi-vendor e-commerce platform with dedicated Customer, Seller, and Admin experiences.

## Features
- Multi-role authentication (Customer, Seller, Admin)
- Product and category management
- Cart and order processing
- Seller onboarding and approval
- Admin analytics dashboard

## Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

### Frontend
- Next.js (App Router)
- React
- TailwindCSS (planned)
- Redux Toolkit / React Query (planned)

## Project Structure
```
apps/
  customer/     # Customer storefront (Next.js)
  seller/       # Seller panel (Next.js)
  admin/        # Admin panel (Next.js)
backend/        # Express + Mongo API
packages/
  ui/           # Shared UI components
  config/       # Shared eslint/tsconfig
  api-client/   # Typed API client
  types/        # Shared TypeScript types
```
## Docs
- docs/NOTION.md
- docs/OPENAPI_OUTLINE.md
- docs/TASK_BOARD.md
- backend/swagger/openapi.yaml

## Setup (high level)
1. Copy `.env.example` to `.env` and update values.
2. Install dependencies for backend and apps.
3. Run backend: `cd backend && npm run dev`
4. Run frontend apps from their respective folders.
