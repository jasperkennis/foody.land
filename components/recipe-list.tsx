
import gql from 'graphql-tag';
import React from 'react';
import styles from '../styles/RecipeList.module.scss';
import withApollo from '../components/with-apollo';
import { Query, Mutation } from 'react-apollo';

const GET_SELECTED_REPOSITORIES = gql`
  query {
    selectedRecipes @client
  }
`;

const RecipeList = () => (
  <Query query={GET_SELECTED_REPOSITORIES}>
    {({ data: { selectedRecipes } }) => (
      <div className={styles['recipe-list']} data-test-selector="recipe-list">
        <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
        <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
        <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
        <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
        <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
      </div>
    )}
  </Query>
)

export default withApollo({ ssr: true })(RecipeList);
