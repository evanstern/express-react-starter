import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

export const connectDb = (): void => {
  mongoose.connect(MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to ${MONGO_URI}`);
});

mongoose.connection.on('error', (err: Error) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose connection closed to ${MONGO_URI}`);
});

// end the connection if the node process ends
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed due to application termination');
    process.exit(0);
  });
});

// register all models
require('./models/item');
