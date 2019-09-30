import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(8000, () => {
  console.log('App is listening on port 8000!');
});
