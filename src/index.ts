import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';

import { Item } from './models/item';

const app: Application = express();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI!, {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', async (_req: Request, res: Response) => {
  const item = await Item.find();
  res.send(item);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
