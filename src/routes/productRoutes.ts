import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();

router.get('/', ProductController.getAllProducts);

router.get('/category/:categoryId', ProductController.getProductsByCategory);

router.get('/:id', ProductController.getProductById);

export default router;
