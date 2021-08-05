import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import PokemonList from './components/PokemonList'
import Pagination from './Pagination';


function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken( c => cancel = c)
    }).then( res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map( poketmon => poketmon.name))
    })

    return () => cancel()

  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
