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
  const [recipeCreateOne, {data}] = useMutation(ADD_RECIPEE)
  console.log(data)
  // console.log(recipeCreateOne)
  recipeCreateOne({
    variables: {
      tite: 'lekker',
    },
  })
}

const RecipeList = () => {
  console.log('Adding data')
  addStuffs()

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
