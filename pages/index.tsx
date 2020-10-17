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
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        {' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
);

export default withApollo({ ssr: true })(Home);
