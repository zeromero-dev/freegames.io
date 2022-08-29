import React from 'react'
import axios from "axios";

import { useQuery } from '@tanstack/react-query'

import GameCard from './GameCard';

export const Game = () => {

  const options = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': 'efa8e056femshf6230fdf6022d20p126a25jsn829d203c1efb', //change this to env variable
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  const { isLoading, error, data } = useQuery(["gameData"], () =>
    axios
      .get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
      .then((res) => res.data)
  );

  //I know it looks silly, I'll change it later
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className='grid grid-cols-4 gap-2 gap-y-8 ml-20 grid-flow-dense mt-5'>
      {data.map((game) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.name} image={game.image} description={game.description} url={game.open_giveaway_url} />
        )
      })}
    </div>
  )
}
