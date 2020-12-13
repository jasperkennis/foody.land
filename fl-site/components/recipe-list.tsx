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

const readResult = ({ loading, error, data }) => {
  // setInterval(() => {
    console.log('After')
    console.log(loading)
    console.log(error)
    console.log(data)
  //   readResult({ loading, error, data })
  // }, 1000)
}

const addStuffs = () => {
  console.log('Adding data')

  const [recipeCreateOne, data] = useMutation(ADD_RECIPEE)
  console.log(data)
  // console.log(recipeCreateOne)
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

  console.log('Getting intial props from hardcode')
  const { loading, error, data } = useQuery(GET_RECIPIES)
  readResult({ loading, error, data })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
  return (
    <div className={styles['recipe-list']} data-test-selector="recipe-list">
      <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
      <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
      <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
      <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
      <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
    </div>
  )
}

export default withApollo({ ssr: true })(RecipeList)
