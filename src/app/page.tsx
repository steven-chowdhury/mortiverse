'use client'

import App from './components/App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
