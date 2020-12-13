/**
 * @example
 *
 * PAYLOAD
{
  "recipeCreateOneRecord": {
    "title": "Butter beer",
    "dateUpdated": "412",
    "dateCreated": "535"
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
  mutation Mutation($recipeCreateOneRecord: CreateOneRecipesInput!) {
    recipeCreateOne(record: $recipeCreateOneRecord) {
      record {
        title
        recipeId
        dateUpdated
        dateCreated
      }
    }
  }
`

const addStuffs = () => {
  console.log('Adding data')

  const [recipeCreateOne] = useMutation(ADD_RECIPEE)
  recipeCreateOne({
    variables: {
      recipeCreateOneRecord: {
        title: 'Given by code',
        dateUpdated: '999',
        dateCreated: '000',
      },
    },
  })
}

const RecipeList = () => {
  // addStuffs()

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

export default withApollo({ ssr: true })(RecipeList)
