/* @flow */

import mongoose from 'mongoose';

// const hostUri = 'mongodb://root:example@mongo:27017/foodyland'
const hostUri = 'mongodb://root:example@mongo:27017/foodyland?authSource=admin&readPreference=primary&ssl=false'

mongoose.Promise = Promise;

const opts = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(hostUri, opts);

export const { connection } = mongoose;
connection.on('error', (e) => {
  if (e.message.code === 'ETIMEDOUT') {
    console.error(e);
    mongoose.connect(hostUri, opts);
  }
  console.error(e);
});
connection.on('connected', () => {
  console.info(`MongoDB successfully connected to ${hostUri}`);
});
connection.on('reconnected', () => {
  console.info('MongoDB reconnected!');
});

process.on('SIGINT', async () => {
  await connection.close();
  console.info('Force to close the MongoDB conection');
  process.exit(0);
});
