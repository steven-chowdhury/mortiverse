interface Character {
  id: string
  name: string
  location: {
    name: string
  }
  species: string
  image: string
  status: 'Alive' | 'Dead' | 'unknown'
}