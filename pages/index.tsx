import axios from 'axios'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  const [games, setGames] = useState([])
  
  // const getGames = async () => {
  //   const url = 'https://www.gamerpower.com/api/giveaways?platform=pc'
  //   await axios.get(url)
  //       .then(response => setGames(response.data))
  //       .catch(err => console.log(err))
  // }

  const getGames = async () => {
    const url = 'https://www.gamerpower.com/api/giveaways?platform=pc'
        await axios
        .get(url)    
            .then(response => response.map(it => ({
              title: `${it.title}`,
              thumbnail: `${it.thumbnail}`,
              url: `${it.open_giveaway_url}`,
              type: `${it.type}`,
              platforms: `${it.platforms}`
            })))
            .catch(err => console.log(err))
      }
      console.log(getGames())

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-x-8 gap-y-10 m-20"> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/62ab460550e22.jpg" />
      </div> 
      <div className="">
        <img src="https://www.gamerpower.com/offers/1/60fedc767adc7.jpg" />
      </div> 
  </div>
  )
}
export default Home
