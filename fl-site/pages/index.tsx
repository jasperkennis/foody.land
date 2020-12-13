import Head from 'next/head'
import React from 'react'
// import styles from '../styles/home.module.scss'
import styles from '../styles/Home.module.scss'
// import withApollo from '../components/with-apollo';
import RecipeList from '../components/recipe-list'
import { ApolloProvider } from 'react-apollo'
import client from '../etc/apollo-client'

interface Props {
  custom: string
}

const Home = ({custom}: Props) => (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
)

Home.getInitialProps = ({ pathname, query }) => ({
  custom: 'some custom string', // pass some custom props to component
})

export default Home
