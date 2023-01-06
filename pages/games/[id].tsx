import { Header } from '../../src/components/Header'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../src/components/Loader'
import { options_id } from '../../src/fetchers/options'
import GameDetails from '../../src/components/GameDetailsPage'

// #Fetches current game data
const fetchGameID = async (id: string) => {
    const res = await axios.get(`https://gamerpower.p.rapidapi.com/api/giveaway`, options_id(id))
    return await res.data
}

const GameInfo = () => {
    const router = useRouter()
    const gameID = typeof router.query?.id === "string" ? router.query.id : "";

    const { isSuccess, data: game, isLoading, isError } = useQuery(["getGame", gameID], () => fetchGameID(gameID));

    if (isError) return <div>Error</div>
    if (isLoading) return <Loader />
    if (isSuccess) return (<div>
        <GameDetails
            key={game.id}
            id={game.id}
            title={game.title}
            image={game.image}
            description={game.description}
            url={game.open_giveaway_url}
            platforms={game.platforms}
            instructions={game.instructions}
            status={game.status}
            type={game.type}
        />
    </div>
    )
}
export default GameInfo