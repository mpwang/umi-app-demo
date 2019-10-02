import _ from 'lodash'

export type PokeDataKey =
'back_default' |
'back_female' |
'back_shiny' |
'back_shiny_female' |
'front_default' |
'front_female' |
'front_shiny' |
'front_shiny_female'

export type PokeData = {
  [key in PokeDataKey]: string | undefined
}

export async function getPokemon (pokemonId: number) {
  const api = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

  let response = await fetch(api)
  if (!response.ok) {
    throw new Error('Network response was not ok.')
  }
  response = await response.json()
  const pokemon: PokeData = _.get(response, 'sprites')
  return pokemon
}