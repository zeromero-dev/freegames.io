import React from 'react'
import axios from "axios";




import { isError, useQuery } from '@tanstack/react-query'

export const Game = () => {

  const options = {
    method: 'GET',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': 'efa8e056femshf6230fdf6022d20p126a25jsn829d203c1efb',
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  const { isLoading, error, data } = useQuery(["gameData"], () =>
    axios
      .get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
      //.get("https://www.gamerpower.com/api/giveaways?sort-by=popularity")
      .then((res) => res.data)
  );

  //I know it looks silly, I'll change it later
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      {data.map(game => {
        return (
          <div key={game.id}>
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} />
            <p>{game.description}</p>
          </div>
        )
      })}
    </div>
  )
}
