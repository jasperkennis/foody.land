import { SchemaComposer } from 'graphql-compose';
import AuthorsModel from './models/Authors.js';
import RecipesModel from './models/Recipes.js';

const { authorQuery, authorMutation } = AuthorsModel
const { recipeQuery, recipeMutation } = RecipesModel

const capaSchemaComposer = new SchemaComposer();

capaSchemaComposer.Query.addFields({
  ...authorQuery,
  ...recipeQuery,
});

capaSchemaComposer.Mutation.addFields({
  ...authorMutation,
  ...recipeMutation
});

const graphqlSchema = capaSchemaComposer.buildSchema();

export default graphqlSchema;
