import { useState, useEffect } from 'react'

export default function PokemonList( { pokemon, pokemonInfo } ) {

  return (
    <div>
      {pokemon.map( pokemon => (
        <div key={pokemon.name}>
          <span>{pokemon.name}</span>
          <section>
            <div><img src={pokemonInfo.image} alt={pokemon.name}></img></div>
            <div className="abilities">
              {pokemonInfo.abilities.reduce((acc,cur,i,arr) => i !== arr.length-1 ? acc+`${cur}, ` : acc+`${cur}`, "")}
            </div>
            <div className="stats">
              {pokemonInfo.stats}
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}
