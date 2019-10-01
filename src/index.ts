import mongoose from 'mongoose';

import app from './app';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
