import Image from 'next/image'
import React from 'react'

const CharacterList = () => {
  return (
    <ul>
      <li>
        <h2>Rick Sanchez</h2>
        <Image 
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt={'Rick Sanchez'}
          width={100}
          height={100}
        />
        <div>Locaion: Citadel of Ricks</div>
      </li>
    </ul>
  )
}

export default CharacterList