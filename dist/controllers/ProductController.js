"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
class ProductController {
    static async getAllProducts(req, res) {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const products = await ProductService_1.ProductService.getProductsWithPagination(page, limit);
            const totalCount = await ProductService_1.ProductService.getTotalProductsCount();
            res.json({
                products,
                pagination: {
                    page,
                    limit,
                    totalCount,
                    totalPages: Math.ceil(totalCount / limit)
                }
            });
        }
        catch (error) {
            console.error('Error getting products:', error);
            res.status(500).json({ error: 'Failed to get products' });
        }
    }
    static async getProductsByCategory(req, res) {
        try {
            const categoryId = parseInt(req.params.categoryId);
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            if (isNaN(categoryId)) {
                res.status(400).json({ error: 'Invalid category ID' });
                return;
            }
            const products = await ProductService_1.ProductService.getProductsByCategoryId(categoryId, page, limit);
            const totalCount = await ProductService_1.ProductService.getTotalProductsCountByCategory(categoryId);
            res.json({
                products,
                pagination: {
                    page,
                    limit,
                    totalCount,
                    totalPages: Math.ceil(totalCount / limit)
                }
            });
        }
        catch (error) {
            console.error('Error getting products by category:', error);
            res.status(500).json({ error: 'Failed to get products by category' });
        }
    }
    static async getProductById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({ error: 'Invalid product ID' });
                return;
            }
            const product = await ProductService_1.ProductService.getProductById(id);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.json(product);
        }
        catch (error) {
            console.error('Error getting product:', error);
            res.status(500).json({ error: 'Failed to get product' });
        }
    }
}
exports.ProductController = ProductController;
