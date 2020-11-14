const { gql } = require('@apollo/client');

const typeDefs = gql`
"""
Everything you need to know to make a yummy dish!
"""
type Recipe {
  title: String
  author: Author
}

"""
A genius who writes things.
"""
type Author {
  name: String
  recipes: [Recipe]
}

"""
Ways to get data.
"""
type Query {
  recipes: [Recipe]!
  author(name: String!): Author
}

"""
The stuff you get when you try to get a recipe
"""
type RecipeUpdateResponse {
  """
  Only true if you made it more yummy!
  """
  success: Boolean!
  message: String
  recipes: [Recipe]
}

"""
Ways to update things
"""
type Mutation {
  """
  Update a recipe (make it even more yummy please?!)
  """
  updateRecipe(titles: [String]!): RecipeUpdateResponse!
}
`;

module.exports = typeDefs;
