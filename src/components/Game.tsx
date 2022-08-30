import React from 'react'
import axios from "axios";

import { useQuery } from '@tanstack/react-query'

import GameCard from './GameCard';

export const Game = () => {

  const options = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
<<<<<<< HEAD
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY, //change this to env variable
=======
      'X-RapidAPI-Key': '${envkey}',
>>>>>>> 4f4e63c1a7b4156da6de7492767325f348dd9d76
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
    <div>
      {data.map((game) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.name} image={game.image} description={game.description} />
        )
      })}
    </div>
  )
}
