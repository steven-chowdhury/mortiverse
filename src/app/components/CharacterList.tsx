'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'


import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const CharacterList = () => {
  const [ characters, setCharacters ] = useState<Character[]>([])

  useEffect(() => {
    async function getResults() {
      const result = await client.query({
        query: gql`
          query {
            characters {
              results {
                id
                name
                image
                species
                status
                location {
                  name
                }
              }
            }
          }
        `
      })

      const characters = result.data.characters.results

      setCharacters(characters)

      console.log('result =>', result)
    }

    getResults()
    
  }, [])

  return (
    <ul>
      { characters.map(character => (
        <li style={{ display: 'flex', gap: '20px' }} key={character.id}>
          <Image 
            src={character.image}
            alt={character.name}
            width={100}
            height={100}
          />
          <div>
            <h2>{character.name}</h2>
            <div>Status: {character.status}</div>
            <div>Species: {character.species}</div>
            <div>Location: {character.location.name}</div>
          </div>
        </li>
      ))}
      
    </ul>
  )
}

export default CharacterList