import axios from "axios";
import Link from 'next/link';

import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query'

import { GameCard } from './components/GameCard';
import { options_popularity, options_date } from './fetchers/options'
import Loader from "./components/Loader";


import { GameCardProps } from './components/GameCard';

const fetchGames = async (options: Object) => {
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
  const { data, error, isLoading } = useQuery(["gameData"], (async () => await fetchGames(options_popularity)))

  if (isLoading) return (<Loader />)
  error ? <div>Error</div> : null
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-8 lg:ml-10 sm:ml-4 mt-5 grid-flow-dense'>
    {/* <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2 gap-y-8 lg:ml-10 sm:ml-4 mt-5 grid-flow-dense'> */}
      {data.map((game: any) => {
        return (
          <GameCard key={game.id} id={game.id} name={game.title} image={game.image} description={game.description} url={game.open_giveaway_url} platforms={game.platforms} date={game.published_date} />
        )
      })}
    </div>
  )
}



