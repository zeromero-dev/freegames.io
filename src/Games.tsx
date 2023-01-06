import axios from "axios";
import Link from 'next/link';

import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query'

import { GameCard } from './components/GameCard';
import { options_popularity } from './fetchers/options'
import Loader from "./components/Loader";

import { GameDetails } from "./components/GameDetailsPage";

export const fetchGames = async (options: Object) => {
  const res = await axios.get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
  return res.data
}

export const fetchNotifcationGames = async (options: Object) => {
  const res = await axios.get("https://gamerpower.p.rapidapi.com/api/giveaways", options)
  const data = res.data
  return data.slice(0, 5)
}
type GameProps = Omit<GameDetails, "instructions" | "status">


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
      {data.map((game: GameProps) => {
        return (
          <GameCard
            key={game.id}
            id={game.id} title={game.title}
            image={game.image}
            description={game.description}
            url={game.url}
            platforms={game.platforms}
            published_date={game.published_date} />
        )
      })}
    </div>
  )
}



