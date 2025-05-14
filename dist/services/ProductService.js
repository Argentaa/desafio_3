"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const database_1 = require("../database/database");
class ProductService {
    static async getAllProducts() {
        const db = await (0, database_1.getDatabase)();
        return db.all('SELECT * FROM products');
    }
    static async getProductsWithPagination(page = 1, limit = 10) {
        const db = await (0, database_1.getDatabase)();
        const offset = (page - 1) * limit;
        return db.all('SELECT * FROM products LIMIT ? OFFSET ?', [limit, offset]);
    }
    static async getProductsByCategoryId(categoryId, page = 1, limit = 10) {
        const db = await (0, database_1.getDatabase)();
        const offset = (page - 1) * limit;
        return db.all('SELECT * FROM products WHERE category_id = ? LIMIT ? OFFSET ?', [categoryId, limit, offset]);
    }
    static async getProductById(id) {
        const db = await (0, database_1.getDatabase)();
        // Get product
        const product = await db.get('SELECT p.*, c.name as category FROM products p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?', [id]);
        if (!product) {
            return undefined;
        }
        const images = await db.all('SELECT * FROM product_images WHERE product_id = ?', [id]);
        return {
            ...product,
            images
        };
    }
    static async getTotalProductsCount() {
        const db = await (0, database_1.getDatabase)();
        const result = await db.get('SELECT COUNT(*) as count FROM products');
        return result?.count || 0;
    }
    static async getTotalProductsCountByCategory(categoryId) {
        const db = await (0, database_1.getDatabase)();
        const result = await db.get('SELECT COUNT(*) as count FROM products WHERE category_id = ?', [categoryId]);
        return result?.count || 0;
    }
}
exports.ProductService = ProductService;
