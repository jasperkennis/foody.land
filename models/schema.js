const { gql } = require('apollo-server');

const typeDefs = gql`
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

type Query {
  books: [Book]!
  author(name: String!): Author
}

type BookUpdateResponse {
  success: Boolean!
  message: String
  books: [Book]
}

type Mutation {
  readBook(titles: [String]!): BookUpdateResponse!
}
`;

module.exports = typeDefs;
