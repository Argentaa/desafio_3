"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const CategoryService_1 = require("../services/CategoryService");
class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const categories = await CategoryService_1.CategoryService.getAllCategories();
            res.json(categories);
        }
        catch (error) {
            console.error('Error getting categories:', error);
            res.status(500).json({ error: 'Failed to get categories' });
        }
    }
    static async getCategoryById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                res.status(400).json({ error: 'Invalid category ID' });
                return;
            }
            const category = await CategoryService_1.CategoryService.getCategoryById(id);
            if (!category) {
                res.status(404).json({ error: 'Category not found' });
                return;
            }
            res.json(category);
        }
        catch (error) {
            console.error('Error getting category:', error);
            res.status(500).json({ error: 'Failed to get category' });
        }
    }
}
exports.CategoryController = CategoryController;
