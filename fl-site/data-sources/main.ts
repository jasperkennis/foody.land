import { MongoClient } from 'mongodb';
import { ApolloServer } from 'apollo-server';
import Users from './recipes';

const client = new MongoClient(process.env.MAIN_MONGO_DB);
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
