import { Header } from '../../src/components/Header'
import axios from 'axios'
import Image from 'next/image'
import ReactPlayer from 'react-player/lazy'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../src/components/Loader'
import { options_id } from '../../src/components/fetchers/options'
import GameDetails from '../../src/components/GameDetails'


const fetchGame = async (id: string) => {
    const res = await axios.get(`https://gamerpower.p.rapidapi.com/api/giveaway`, options_id(id))
    return await res.data
}

const GameInfo = () => {
    const router = useRouter()
    const gameID = typeof router.query?.id === "string" ? router.query.id : "";

    const { isSuccess, data: game, isLoading, isError } = useQuery(["getGame", gameID], () => fetchGame(gameID));

    if (isError) return <div>Error</div>
    if (isLoading) return <Loader />
    if(isSuccess) return ( <div>
        <GameDetails 
            key={game.id}
            id={game.id}
            name={game.title}
            image={game.image}
            description={game.description}
            url={game.open_giveaway_url}
            platforms={game.platforms}
            instructions={game.instructions}
            status={game.status}
            type={game.type}
        />
            {/* <Game key={id} id={id} name={game.title} image={game.image} description={game.description} instructions={game.instructions} url={game.url} platforms={game.platforms} status={game.status} type={game.type}/> */}
        
        </div>
    )
}
export default GameInfo