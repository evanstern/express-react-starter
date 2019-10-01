import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app: Application = express();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI!, {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
