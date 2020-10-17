import Head from 'next/head';
import React from 'react';
import styles from '../styles/home.module.scss';
import withApollo from '../components/with-apollo';
import RecipeList from '../components/recipe-list'

interface Props {
  custom: string
}

const Home = ({custom}: Props) => (
  <div className={styles.container}>
    <Head>
      <title>Foody.Land</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="https://nextjs.org">Foody.Land</a>
      </h1>
      <p>{custom}</p>

      <RecipeList></RecipeList>
    </main>
  </div>
);

Home.getInitialProps = ({ pathname, query }) => ({
  custom: 'custom' // pass some custom props to component
});

export default withApollo({ ssr: true })(Home);
