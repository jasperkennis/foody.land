import AuthorTC from './Authors.js'
import mongoose from 'mongoose'
import composeWithMongoose from 'graphql-compose-mongoose'

const recipeSchema = new Schema({
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
  resolver: () => AuthorTC.getResolver('findById'),
  prepareArgs: {
    _id: source => source.authorRef,
    skip: null,
    sort: null,
  },
  projection: { authorRef: true },
})

const recipeQuery = {
  recipeById: RecipeTC.getResolver('findById'),
  recipeByIds: RecipeTC.getResolver('findByIds'),
  recipeOne: RecipeTC.getResolver('findOne'),
  recipeMany: RecipeTC.getResolver('findMany'),
  recipeCount: RecipeTC.getResolver('count'),
  recipeConnection: RecipeTC.getResolver('connection'),
  recipePagination: RecipeTC.getResolver('pagination'),
}
const recipeMutation = {
  recipeCreateOne: RecipeTC.getResolver('createOne'),
  recipeCreateMany: RecipeTC.getResolver('createMany'),
  recipeUpdateById: RecipeTC.getResolver('updateById'),
  recipeUpdateOne: RecipeTC.getResolver('updateOne'),
  recipeUpdateMany: RecipeTC.getResolver('updateMany'),
  recipeRemoveById: RecipeTC.getResolver('removeById'),
  recipeRemoveOne: RecipeTC.getResolver('removeOne'),
  recipeRemoveMany: RecipeTC.getResolver('removeMany'),
};

export default {Recipes, recipeQuery, recipeMutation}
