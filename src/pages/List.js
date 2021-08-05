import { useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PokemonList from '../components/PokemonList'
import Pagination from '../Pagination'

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ul {
    width: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  .pokemonLi {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid #252525;
  }

  .pokemonInfo {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .pokemonImage {
      width: 30%;
      background: yellow;
    }

    .pokemonDetails {
      flex: 1 1 70%;
      display: flex;
      flex-direction: column;
    }
  }

  .abilities {
    display: flex;
    column-gap: 1rem;
    .ability {
      background: var(--sky-blue-color);
      padding: 0.1rem 0.5rem;
      border-radius: 10px;
    }
  }

  .stats {
    display: flex;
    flex-direction: column;
  }
`

const initialState = [
  {
    name: "bulbasaur",
    url: null
  },
  {
    name: "charmander",
    url: null
  }
]

export default function List() {
  const [pokemon, setPokemon] = useState(initialState)
  const [pokemonInfo, setPokemonInfo] = useState([])
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
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map( poketmon => {
        return {
          name: poketmon.name,
          url: poketmon.url
        }
      }))
    })

    return () => cancel()

  }, [currentPageUrl])

  useEffect(() => {
    pokemon.forEach(el => {
      axios.get(el.url)
      .then(res => {
        setPokemonInfo(prev => {
          let one = {
            name: res.data.name,
            image: res.data.sprites.front_default,
            abilities: res.data.abilities.reduce((acc, cur) => [...acc, cur.ability.name], []),
            stats: res.data.stats.reduce((acc, cur) => [...acc, `${cur.stat.name}: ${cur.base_stat}`], []),
          }
          return [...prev, one]
        })
        setLoading(false)
      })
    })
    
  }, [pokemon])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <ListWrapper>
      <ul>
        {pokemon.map( pokemon => (
          <li className="pokemonLi" key={pokemon.name}>
            <h3>Name: {pokemon.name}</h3>
            <section className="pokemonInfo">
              <div className="pokemonImage">
                <img src={pokemonInfo.image} alt={pokemon.name}></img>
              </div>
              <div className="pokemonDetails">
                <div className="abilities">
                {
                  pokemonInfo.filter(el => el.name === pokemon.name)
                  .map(el=> el.abilities.map(ability => <span className="ability">{ability}</span>))
                }
                </div>
                <div className="stats">
                  {pokemonInfo.stats}
                  {
                  pokemonInfo.filter(el => el.name === pokemon.name)
                  .map(el=> el.stats.map(stat => <span className="stat">{stat}</span>))
                }
                </div>
              </div>
            </section>
          </li>
        ))}
      </ul>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </ListWrapper>
  )
}


//