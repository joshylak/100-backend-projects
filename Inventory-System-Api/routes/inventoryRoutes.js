import { Router } from 'express';
    import {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    adjustStock
    } from '../controllers/inventoryController.js';

const router = Router();

router.post('/', addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id/stock', adjustStock);

    export default router;
