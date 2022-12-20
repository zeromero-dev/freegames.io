import axios from "axios";
import Link from 'next/link';

import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query'

import { GameCard } from './GameCard';
import { options_popularity } from '../../src/components/fetchers/options'
import Loader from "./Loader";


import { GameCardProps } from './GameCard';

const fetchGames = async () => {
  const res = await axios.get("https://gamerpower.p.rapidapi.com/api/giveaways", options_popularity)
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

  if (isLoading) return (<Loader/>)

  error ? <div>Error</div> : null

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 gap-y-8 lg:ml-10 sm:ml-4 mt-5 grid-flow-dense'>
      {data.map((game: any) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.title} image={game.image} description={game.description} url={game.open_giveaway_url} platforms={game.platforms} />
        )
      })}
    </div>
  )
}



