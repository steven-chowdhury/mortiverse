import Image from 'next/image'
import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../lib/graphql/queries'

const CharacterList = () => {
  const { loading, error, data } = useQuery<CharacterResponse>(GET_CHARACTERS)

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <ul>
      { data?.characters.results.map(character => (
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