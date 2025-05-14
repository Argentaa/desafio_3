"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const database_1 = require("../database/database");
class CategoryService {
    static async getAllCategories() {
        const db = await (0, database_1.getDatabase)();
        return db.all('SELECT * FROM categories');
    }
    static async getCategoryById(id) {
        const db = await (0, database_1.getDatabase)();
        return db.get('SELECT * FROM categories WHERE id = ?', [id]);
    }
}
exports.CategoryService = CategoryService;
