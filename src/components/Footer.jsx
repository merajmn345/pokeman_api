import React from 'react'
// import Pagination from './Pagination';
import './footer.css';
import Search from './Search';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

export default function Footer() {

  // const [pokemon, setPokemon] = useState([]);
  // const [currentPageUrl, setCurrentPageUrl] = useState( "https://pokeapi.co/api/v2/pokemon")
  // const [nextPageUrl, setNextPageUrl] = useState()
  // const [prevPageUrl, setPrevPageUrl] = useState()


  // useEffect(() => {
  //   setLoading(false)
  //   let cancel
  //   axios.get(currentPageUrl, {
  //     cancelToken: new axios.CancelToken(c => cancel = c)
  //   }).then(res => {
  //     setNextPageUrl(res.data.next)
  //     setPrevPageUrl(res.data.previous)
  //     setPokemon(res.data.results.map(p => p.name))
  //   })

  //   return () => {
  //     cancel()
  //   }
  // },[currentPageUrl])


  // function gotoNextPage(){
  //   setCurrentPageUrl(nextPageUrl)
  // }

  // function gotoPrevPage(){
  //   setCurrentPageUrl(prevPageUrl)
  // }
  return (
    <div className='last'>
        <Search />
      {/* <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage :null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      /> */}
    </div>
  )
}
