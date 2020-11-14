import { MongoClient } from 'mongodb';
import { ApolloServer } from 'apollo-server';
import Recipes from './recipes';

const client = new MongoClient(process.env.MAIN_MONGO_DB);
client.connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new Recipes(client.db().collection('recipes')),
  }),
});
