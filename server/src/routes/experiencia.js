import { Router } from 'express';
import AllController from '../controllers/controllersAll.js'; 
const router = Router();

router.get('/', AllController.getAll);


export default router;
