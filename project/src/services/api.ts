// API base URL
const API_BASE_URL = 'http://localhost:3000/api';

// Types
import { Category } from '../types/Category';
import { Product, ProductWithImages } from '../types/Product';
import { ContactSubmission } from '../types/ContactSubmission';
import { PaginatedResponse } from '../types/PaginatedResponse';

// API error class
export class ApiError extends Error {
  status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      errorData.error || `API error: ${response.status} ${response.statusText}`,
      response.status
    );
  }
  return response.json() as Promise<T>;
}

// Categories API
export const categoriesApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return handleResponse<Category[]>(response);
  },
  
  getById: async (id: number): Promise<Category> => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`);
    return handleResponse<Category>(response);
  }
};

// Products API
export const productsApi = {
  getAll: async (page: number = 1, limit: number = 10): Promise<PaginatedResponse<Product>> => {
    const response = await fetch(`${API_BASE_URL}/products?page=${page}&limit=${limit}`);
    return handleResponse<PaginatedResponse<Product>>(response);
  },
  
  getById: async (id: number): Promise<ProductWithImages> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return handleResponse<ProductWithImages>(response);
  },
  
  getByCategory: async (categoryId: number, page: number = 1, limit: number = 10): Promise<PaginatedResponse<Product>> => {
    const response = await fetch(`${API_BASE_URL}/products/category/${categoryId}?page=${page}&limit=${limit}`);
    return handleResponse<PaginatedResponse<Product>>(response);
  }
};

// Contact API
export const contactApi = {
  submit: async (submission: ContactSubmission): Promise<{ id: number; message: string }> => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    });
    return handleResponse<{ id: number; message: string }>(response);
  }
};
