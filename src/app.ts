import express, { Request, Response } from 'express';
import Routes from './routes/routes';

const app = express();

app.use(express.json());

app.use(Routes);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;