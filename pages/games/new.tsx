import { useQuery } from '@tanstack/react-query'
import { Game } from "../../src/Games";
import { ScrollButton } from "../../src/components/ScrollButton";
import { Header } from "../../src/components/Header";
import { fetchGames } from '../../src/Games';
import { options_new } from '../../src/fetchers/options';
import { GameCard } from '../../src/components/GameCard';
import Loader from '../../src/components/Loader';

const NewGames = () => {
    const { data, error, isLoading } = useQuery(["newGameData"], (async () => await fetchGames(options_new)))

    if (isLoading) return (<Loader />)
    error ? <div>Error</div> : null
    return (
        <div>
            <Header />
            <ScrollButton />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-8 lg:ml-10 sm:ml-4 mt-5 grid-flow-dense'>
            {data.map((game: any) => {
                return (
                        <GameCard
                            key={game.id}
                            id={game.id} title={game.title}
                            image={game.image}
                            description={game.description}
                            url={game.open_giveaway_url}
                            platforms={game.platforms}
                            published_date={game.published_date} />
                )
            })}
        </div>
        </div>
    )
}

export default NewGames