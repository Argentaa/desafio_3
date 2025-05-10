import { getDatabase } from '../database/database';
import { Product, ProductImage, ProductWithImages } from '../models/Product';

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    const db = await getDatabase();
    return db.all<Product[]>('SELECT * FROM products');
  }

  static async getProductsWithPagination(page: number = 1, limit: number = 10): Promise<Product[]> {
    const db = await getDatabase();
    const offset = (page - 1) * limit;
    return db.all<Product[]>(
      'SELECT * FROM products LIMIT ? OFFSET ?',
      [limit, offset]
    );
  }

  static async getProductsByCategoryId(categoryId: number, page: number = 1, limit: number = 10): Promise<Product[]> {
    const db = await getDatabase();
    const offset = (page - 1) * limit;
    return db.all<Product[]>(
      'SELECT * FROM products WHERE category_id = ? LIMIT ? OFFSET ?',
      [categoryId, limit, offset]
    );
  }

  static async getProductById(id: number): Promise<ProductWithImages | undefined> {
    const db = await getDatabase();
    
    // Get product
    const product = await db.get<Product>(
      'SELECT p.*, c.name as category FROM products p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?',
      [id]
    );
    
    if (!product) {
      return undefined;
    }
    
    const images = await db.all<ProductImage[]>(
      'SELECT * FROM product_images WHERE product_id = ?',
      [id]
    );
    
    return {
      ...product,
      images
    };
  }

  static async getTotalProductsCount(): Promise<number> {
    const db = await getDatabase();
    const result = await db.get<{ count: number }>('SELECT COUNT(*) as count FROM products');
    return result?.count || 0;
  }

  static async getTotalProductsCountByCategory(categoryId: number): Promise<number> {
    const db = await getDatabase();
    const result = await db.get<{ count: number }>(
      'SELECT COUNT(*) as count FROM products WHERE category_id = ?',
      [categoryId]
    );
    return result?.count || 0;
  }
}
