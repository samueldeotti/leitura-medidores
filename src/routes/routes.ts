import express from 'express';
import MeasureController from '../controllers/measures.controller';

const measureController = new MeasureController();

const router = express.Router();

router.post('/upload', (req, res) => measureController.createMeasure(req, res));

export default router;
