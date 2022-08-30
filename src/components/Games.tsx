import React from 'react'
import axios from "axios";
import Link from 'next/link';

import { useQuery } from '@tanstack/react-query'

import GameCard from './GameCard';

export const Game = () => {

  const options = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY}`, //the env variable is not working propely
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  const { isLoading, error, data } = useQuery(["gameData"], () =>
    axios
      .get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
      .then((res) => res.data)
  );

  //I know it looks silly, I'll change it later
  if (isLoading) return (
    <div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  )
  if (error) return <div> ERROR</div>

  return (
    <div className='grid grid-cols-4 gap-2 gap-y-8 ml-20 grid-flow-dense mt-5'>
      {data.map((game: any) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.name} image={game.image} description={game.description.substring(0, 300)} url={game.open_giveaway_url} />
        )
      })}
    </div>
  )
}

