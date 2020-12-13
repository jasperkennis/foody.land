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
console.log(hostUri)
mongoose.connect(hostUri, opts);

export const { connection } = mongoose;
connection.on('error', (e) => {
  if (e.message.code === 'ETIMEDOUT') {
    console.error(e);
    mongoose.connect(hostUri, opts);
  }
  console.log(e);
});
connection.on('connected', () => {
  console.log(`MongoDB successfully connected to ${hostUri}`);
});
connection.on('reconnected', () => {
  console.log('MongoDB reconnected!');
});

process.on('SIGINT', async () => {
  await connection.close();
  console.log('Force to close the MongoDB conection');
  process.exit(0);
});
