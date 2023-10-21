import { Router } from "express";
import {getProductsByPrice}  from '../controller/priceProductController'
const router = Router();

router.get('/:idUser/:nameProduct',getProductsByPrice)
export default router;