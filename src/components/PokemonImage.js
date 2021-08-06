import { useState, useEffect } from 'react'

export default function PokemonImage( { name, pokemonInfo } ) {
  const [loading, setLoading] = useState(true)
  const [imageUrls, setImageUrls] = useState()

  useEffect(()=> {
    
    // setImageUrls( () => {
    //   let arr = []
    //   for (let pokemon in pokemonInfo) {
    //     arr.push(pokemon.image)
    //   }
    //   return arr
    // })
    // url !== undefined ? setLoading(false) : setLoading(true)
    
  }, [pokemonInfo])

  if (loading) return "Loading..."

  return (
    <div className="pokemonImage">
      
    </div>
  )
}

//<img src={url} alt={name}></img>