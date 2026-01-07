import { Router } from 'express';
import AllController from '../controllers/controllersAll.js';

const router = Router();

// Rutas
router.get('/', AllController.getAll);        
router.get('/:id', AllController.getOne);     
router.post('/', AllController.create);
router.put('/:id', AllController.upDate);
router.delete('/', AllController.deleteAll);

export default router;
