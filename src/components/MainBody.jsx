import React, {useEffect, useState } from 'react'
import PokemonList from "./PokemonList";
import Pagination from './Pagination'
import axios from 'axios';
import './mainbody.css';


export default function MainBody() {

  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState( "https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const[loading, setLoading] = useState(true)

  // const pokeFun=async()=> {
  //   setLoading(true)

  //   const res=await axios.get(url);
  //   setNextPageUrl(res.data.next)
  //   setPrevPageUrl(res.data.previous)
  //   setPokemon(res.data.results.map(p => p.name))
  //   setLoading
  // }

  // const getPokemon=async(res) => {
  //   res.map(async(item)=> {
  //     const result(item)=> {
  //       const result=await axios.get(item.url)

  //       setPokemon(state=>{
  //         state = [...state, result.data]
  //         return state;
  //       })
  //     }
  //   })
  // }


  useEffect(() => {
    setLoading(false)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      
      
    })

    return () => {
      cancel()
    }
  },[currentPageUrl])

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  if(loading) return "Loading..."
  

  return (
    <div className="main">
        
        <PokemonList pokemon={pokemon}/>
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage :null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
    </div>
  )
}
