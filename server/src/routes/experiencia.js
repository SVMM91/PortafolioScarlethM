import { Router } from 'express';
import AllController from '../controllers/controllersAll.js';

const router = Router();

router.get('/:id', AllController.getOne);
router.get('/', AllController.getAll);
router.post('/', AllController.create);
router.put('/:id', AllController.upDate);
router.delete('/', AllController.deleteAll);

export default router;
