import React from 'react'
import axios from "axios";
import Link from 'next/link';

import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query'

import { GameCard } from './GameCard';
import { options } from './fetchers/options'

export async function getServerSideProps() {
  
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts'], () => axios
    .get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
    .then((res) => res.data))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}

export const Game = () => {

  const { isLoading, error, data } = useQuery(["gameData"], () =>
    axios
      .get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
      .then((res) => res.data)
  );
  //I know it looks silly, I'll change it later
  if (isLoading) return (
    <div className="flex justify-center items-center">
      <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin">
      </div>
    </div>
  )

  if (error) return <div> ERROR</div>
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 gap-y-8 ml-10 grid-flow-dense mt-5'>
      {data.map((game: any) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.title} image={game.image} description={game.description} url={game.open_giveaway_url} platforms={game.platforms} /> //description.substring(0, 300)
        )
      })}
    </div>
  )
}

