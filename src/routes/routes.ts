import { Request, Response } from 'express';
import express from 'express';
import MeasureController from '../controllers/measures.controller';
import ConfirmController from '../controllers/confirm.controller';
import CustomerController from '../controllers/customer.controller';

const measureController = new MeasureController();
const confirmController = new ConfirmController();
const customerController = new CustomerController();

const router = express.Router();

router.post('/upload', (req: Request, res: Response) => measureController.createMeasure(req, res));
router.patch('/confirm', (req: Request, res: Response) => confirmController.confirmMeasure(req, res));
router.get('/:customer_code/list', (req: Request, res: Response) => customerController.getCustomerMeasures(req, res));

export default router;
