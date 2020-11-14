
import gql from 'graphql-tag'
import React from 'react'
import styles from '../styles/RecipeList.module.scss'
import withApollo from '../components/with-apollo'
import { useQuery } from 'react-apollo'

const GET_RECIPIES = gql`
  query GetRecipes {
    recipes {
      title
    }
  }
`

const RecipeList = () => {
  console.log('Getting intial props')
  const { loading, error, data } = useQuery(GET_RECIPIES)
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

RecipeList.getInitialProps = () => {
  console.log('Getting intial props')
  const requestrun = useQuery(GET_RECIPIES)
  console.log(requestrun)
  console.log('any data?')
  const { loading, error, data } = useQuery(GET_RECIPIES)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  console.log(data)
}

export default withApollo({ ssr: true })(RecipeList)
