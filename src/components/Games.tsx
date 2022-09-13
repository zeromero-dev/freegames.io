import React from 'react'
import axios from "axios";
import Link from 'next/link';

import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query'

import { GameCard } from './GameCard';
import { options } from './fetchers/options'

import { GameCardProps } from './GameCard';

const fetchGames = async () => {
  const res = await axios.get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
  return res.data
}
// The data that comes to server as "undefined" for some reason.
// Needs fixing
// export async function getServerSideProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(['gameData'], fetchGames)
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     }
//   }
// }

export const Game = () => {

  const { data, error, isLoading } = useQuery(["gameData"], fetchGames)

  if (isLoading) return (
    <div className="flex justify-center items-center">
      <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin">
      </div>
    </div>
  )

  error ? <div>Error</div> : null

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 gap-y-8 ml-10 grid-flow-dense mt-5'>
      {data.map((game: any) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.title} image={game.image} description={game.description} url={game.open_giveaway_url} platforms={game.platforms} />
        )
      })}
    </div>
  )
}



