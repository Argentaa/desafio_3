import { getDatabase } from '../database/database';
import { Category } from '../models/Category';

export class CategoryService {

  static async getAllCategories(): Promise<Category[]> {
    const db = await getDatabase();
    return db.all<Category[]>('SELECT * FROM categories');
  }

  static async getCategoryById(id: number): Promise<Category | undefined> {
    const db = await getDatabase();
    return db.get<Category>('SELECT * FROM categories WHERE id = ?', [id]);
  }
}
