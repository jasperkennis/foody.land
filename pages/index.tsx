import Head from 'next/head';
import React from 'react';
import styles from '../styles/home.module.scss';
import withApollo from '../components/with-apollo';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Foody.Land</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="https://nextjs.org">Foody.Land</a>
      </h1>

      <div className={styles['recipes-list']} data-test-selector="recipes-list">
        <div className={styles['recipes-list-item']} data-test-selector="recipes-list-item">Look, cook!</div>
        <div className={styles['recipes-list-item']} data-test-selector="recipes-list-item">Look, cook!</div>
        <div className={styles['recipes-list-item']} data-test-selector="recipes-list-item">Look, cook!</div>
        <div className={styles['recipes-list-item']} data-test-selector="recipes-list-item">Look, cook!</div>
        <div className={styles['recipes-list-item']} data-test-selector="recipes-list-item">Look, cook!</div>
      </div>
    </main>
  </div>
);

export default withApollo({ ssr: true })(Home);
