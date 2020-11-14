import { gql } from 'apollo-server'

export default gql`
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

`;
