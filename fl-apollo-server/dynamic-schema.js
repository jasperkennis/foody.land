import { SchemaComposer } from 'graphql-compose';
import { authorQuery, authorMutation } from './models/Authors.js';
import { recipeQuery, recipeMutation } from './models/Recipes.js';

const capaSchemaComposer = new SchemaComposer();

capaSchemaComposer.Query.addFields({
  ...authorQuery,
  ...recipeQuery
});

capaSchemaComposer.Mutation.addFields({
  ...authorMutation,
  ...recipeMutation
});

const graphqlSchema = capaSchemaComposer.buildSchema();

export default graphqlSchema;
