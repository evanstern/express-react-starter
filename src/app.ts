import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';

const Item = mongoose.model('Item');

const app: Application = express();

app.get('/items', async (_req, res) => {
  const items = await Item.find();
  res.send(items);
});

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

export default app;
