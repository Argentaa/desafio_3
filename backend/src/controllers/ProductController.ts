import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export class ProductController {
  static async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      
      const products = await ProductService.getProductsWithPagination(page, limit);
      const totalCount = await ProductService.getTotalProductsCount();
      
      res.json({
        products,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit)
        }
      });
    } catch (error) {
      console.error('Error getting products:', error);
      res.status(500).json({ error: 'Failed to get products' });
    }
  }

  static async getProductsByCategory(req: Request, res: Response): Promise<void> {
    try {
      const categoryId = parseInt(req.params.categoryId);
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      
      if (isNaN(categoryId)) {
        res.status(400).json({ error: 'Invalid category ID' });
        return;
      }
      
      const products = await ProductService.getProductsByCategoryId(categoryId, page, limit);
      const totalCount = await ProductService.getTotalProductsCountByCategory(categoryId);
      
      res.json({
        products,
        pagination: {
          page,
          limit,
          totalCount,
          totalPages: Math.ceil(totalCount / limit)
        }
      });
    } catch (error) {
      console.error('Error getting products by category:', error);
      res.status(500).json({ error: 'Failed to get products by category' });
    }
  }

  static async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        res.status(400).json({ error: 'Invalid product ID' });
        return;
      }
      
      const product = await ProductService.getProductById(id);
      
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      
      res.json(product);
    } catch (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ error: 'Failed to get product' });
    }
  }
}
