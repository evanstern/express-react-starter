import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';

import { Item } from './models/item';

const app: Application = express();

mongoose
  .connect('mongodb://mongo:27017/starter', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', async (_req: Request, res: Response) => {
  const item = await Item.find();
  res.send(item);
});

app.listen(8000, () => {
  console.log('App is listening on port 8000!');
});
