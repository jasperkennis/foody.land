import AuthorModel from './Authors.js'
import mongoose from 'mongoose'
import {composeWithMongoose} from 'graphql-compose-mongoose'

const { AuthorsTC } = AuthorModel

const recipeSchema = new mongoose.Schema({
  recipeId: String,
  recipeRef: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipes'
  }],
  title: String,
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  dateUpdated: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const Recipes = mongoose.model('Recipes', recipeSchema, 'Recipes');

const RecipesTC = composeWithMongoose(Recipes);

RecipesTC.addRelation('author', {
  resolver: () => AuthorsTC.getResolver('findById'),
  prepareArgs: {
    _id: source => source.authorRef,
    skip: null,
    sort: null,
  },
  projection: { authorRef: true },
})

const recipeQuery = {
  recipeById: RecipesTC.getResolver('findById'),
  recipeByIds: RecipesTC.getResolver('findByIds'),
  recipeOne: RecipesTC.getResolver('findOne'),
  recipeMany: RecipesTC.getResolver('findMany'),
  recipeCount: RecipesTC.getResolver('count'),
  recipeConnection: RecipesTC.getResolver('connection'),
  recipePagination: RecipesTC.getResolver('pagination'),
}
const recipeMutation = {
  recipeCreateOne: RecipesTC.getResolver('createOne'),
  recipeCreateMany: RecipesTC.getResolver('createMany'),
  recipeUpdateById: RecipesTC.getResolver('updateById'),
  recipeUpdateOne: RecipesTC.getResolver('updateOne'),
  recipeUpdateMany: RecipesTC.getResolver('updateMany'),
  recipeRemoveById: RecipesTC.getResolver('removeById'),
  recipeRemoveOne: RecipesTC.getResolver('removeOne'),
  recipeRemoveMany: RecipesTC.getResolver('removeMany'),
};

export default {Recipes, recipeQuery, recipeMutation}
