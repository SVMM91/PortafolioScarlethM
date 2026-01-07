import { Router } from 'express';
import AllController from '../controllers/controllersAll.js';

const router = Router();

// Devuelve todos los documentos
router.get('/', AllController.getAll);

// Devuelve un documento por _id
router.get('/:id', AllController.getOne);

// CRUD básico
router.post('/', AllController.create);
router.put('/:id', AllController.upDate);
router.delete('/', AllController.deleteAll);

export default router;
