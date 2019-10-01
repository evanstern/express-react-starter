import { connectDb } from './db';
connectDb();

import app from './app';

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
