import { MongoClient } from 'mongodb';
import { ApolloServer } from 'apollo-server';
import Users from './recipes';

const client = new MongoClient('mongodb://localhost:27017/test');
client.connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new Users(client.db().collection('users')),
    // OR
    // users: new Users(UserModel)
  }),
});
