import { Router } from 'express';
import { CategoryController } from '../controllers/CategoryController';

const router = Router();

router.get('/', CategoryController.getAllCategories);

router.get('/:id', CategoryController.getCategoryById);

export default router;
