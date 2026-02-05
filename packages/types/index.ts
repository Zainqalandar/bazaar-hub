export type UserRole = "CUSTOMER" | "SELLER" | "ADMIN";

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  isBlocked: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string | null;
}

export type ProductStatus = "DRAFT" | "PENDING" | "APPROVED" | "REJECTED";

export interface Product {
  id: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  images: string[];
  status: ProductStatus;
}

export interface CartItem {
  productId: string;
  qty: number;
  priceSnapshot: number;
  titleSnapshot: string;
}

export type OrderStatus =
  | "PLACED"
  | "CONFIRMED"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: OrderStatus;
  grandTotal: number;
  createdAt: string;
}
