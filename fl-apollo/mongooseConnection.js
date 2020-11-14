/* @flow */

import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = Promise;

const opts = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(process.env.MAIN_MONGO_DB, opts);

export const { connection } = mongoose;
connection.on('error', (e) => {
  if (e.message.code === 'ETIMEDOUT') {
    console.log(e);
    mongoose.connect(process.env.MAIN_MONGO_DB, opts);
  }
  console.log(e);
});
connection.on('connected', () => {
  console.log(`MongoDB successfully connected to ${process.env.MAIN_MONGO_DB}`);
});
connection.on('reconnected', () => {
  console.log('MongoDB reconnected!');
});

process.on('SIGINT', async () => {
  await connection.close();
  console.log('Force to close the MongoDB conection');
  process.exit(0);
});
