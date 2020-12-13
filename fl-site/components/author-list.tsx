/**
 * @todo finish implementation
 *
 * @example
 *
 * QUERY:
mutation AuthorCreateOneMutation($authorCreateOneRecord: CreateOneAuthorsInput!) {
  authorCreateOne(record: $authorCreateOneRecord) {
    record {
      authorId
      name
      dateCreated
      dateUpdated
    }
  }
}
 * PAYLOAD
{
  "authorCreateOneRecord": {
    "authorId": "1",
    "name": "Jasper Kennis",
    "dateCreated": "123",
    "dateUpdated": "123"
  }
}
 */

import gql from 'graphql-tag'
import React from 'react'
import styles from '../styles/RecipeList.module.scss'
import withApollo from '../components/with-apollo'
import { useQuery, useMutation } from 'react-apollo'

const GET_RECIPIES = gql`
  query GetRecipes {
    recipeMany {
      title
    }
  }
`

const ADD_RECIPEE = gql`
  mutation RecipeCreateOne($type: String!) {
    recipeCreateOne(title: $type) {
      recipeId
      title
    }
  }
`

const addStuffs = () => {
  const [recipeCreateOne, {data}] = useMutation(ADD_RECIPEE)

  recipeCreateOne({
    variables: {
      tite: 'lekker',
    },
  })
}

const RecipeList = () => {
  const { loading, error, data } = useQuery(GET_RECIPIES)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className={styles['recipe-list']} data-test-selector="recipe-list">
      {data.recipeMany.map((recipe, i) => {
        return <div key={i} className={styles['recipe-list-item']} data-test-selector="recipe-list-item">{recipe.title}</div>
      })}
    </div>
  )
}

// RecipeList.getInitialProps = () => {
//   console.log('Getting intial props from getInitialProps')
//   const requestrun = useQuery(GET_RECIPIES)
//   console.log(requestrun)
//   console.log('any data?')
//   const { loading, error, data } = useQuery(GET_RECIPIES)
//   if (loading) return 'Loading...'
//   if (error) return `Error! ${error.message}`
//   console.log(data)
// }

export default withApollo({ ssr: true })(RecipeList)
