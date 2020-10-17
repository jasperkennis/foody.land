import React from 'react';
import styles from '../styles/RecipeList.module.scss';
import withApollo from '../components/with-apollo';

const RecipeList = () => (
  <div className={styles['recipe-list']} data-test-selector="recipe-list">
    <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
    <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
    <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
    <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
    <div className={styles['recipe-list-item']} data-test-selector="recipe-list-item">Look, cook!</div>
  </div>
)

export default withApollo({ ssr: true })(RecipeList);
