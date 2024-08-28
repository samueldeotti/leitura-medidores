import express from 'express';
import MeasureController from '../controllers/measures.controller';
import ConfirmController from '../controllers/confirm.controller';

const measureController = new MeasureController();
const confirmController = new ConfirmController();

const router = express.Router();

router.post('/upload', (req, res) => measureController.createMeasure(req, res));
router.patch('/confirm', (req, res) => confirmController.confirmMeasure(req, res));

export default router;
