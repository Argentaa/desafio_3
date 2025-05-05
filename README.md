# PetShop Backend API

This is the backend API for a pet shop website built with Node.js, TypeScript, and SQLite.

## Features

- Products API with pagination
- Categories API
- Product details API
- Contact form submission API
- SQLite database

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Start the server:

```bash
npm start
```

For development with hot-reloading:

```bash
npm run dev
```

## API Endpoints

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get a category by ID

### Products

- `GET /api/products` - Get all products with pagination
  - Query parameters:
    - `page` (default: 1)
    - `limit` (default: 10)
- `GET /api/products/category/:categoryId` - Get products by category ID with pagination
  - Query parameters:
    - `page` (default: 1)
    - `limit` (default: 10)
- `GET /api/products/:id` - Get product by ID with images

### Contact

- `POST /api/contact` - Save a contact form submission
  - Request body:
    ```json
    {
      "full_name": "John Doe",
      "phone": "123-456-7890",
      "email": "john@example.com",
      "city": "New York",
      "state": "NY",
      "product_id": 1 // Optional
    }
    ```

## Database Schema

### Categories

- `id` - Primary key
- `name` - Category name
- `description` - Category description
- `image_url` - Category image URL

### Products

- `id` - Primary key
- `name` - Product name
- `description` - Product description
- `price` - Product price
- `stock` - Product stock quantity
- `category_id` - Foreign key to categories table
- `main_image_url` - Main product image URL
- `created_at` - Creation timestamp

### Product Images

- `id` - Primary key
- `product_id` - Foreign key to products table
- `image_url` - Image URL
- `is_main` - Boolean indicating if this is the main image

### Contact Submissions

- `id` - Primary key
- `full_name` - Customer's full name
- `phone` - Customer's phone number
- `email` - Customer's email
- `city` - Customer's city
- `state` - Customer's state
- `product_id` - Optional foreign key to products table
- `created_at` - Submission timestamp
