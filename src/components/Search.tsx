import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../Games"
import { options_popularity } from "../fetchers/options";
import { useRouter } from "next/router";

import { NotificationBellProps } from "./NotificationBell";

export const Search = () => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();
    // console.log(search)
    // @ts-expect-error (I have no clue why this is happening, need to define "search" as a string maybe?)
    const { data, error, isLoading } = useQuery(["gameData"], search, (async () => await fetchGames(options_popularity)))

    const searchData = Array.isArray(data) ? data.filter((game: NotificationBellProps) => game.title.toLowerCase().includes(search.toLowerCase())) : []
    // console.log(searchData)
    const handleChange = (event: React.FormEvent) => {
        const target = event.target as HTMLInputElement;
        setSearch(target.value);
    }

    return (
        <div className="dropdown dropdown-bottom">
            <input type="text" placeholder="Search..." className="input input-bordered w-72" onChange={handleChange} value={search} />
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72">
                {search.length === 0 || searchData.length === 0 ? <li className="flex">No results found</li> :
                searchData.map((game: NotificationBellProps) => {
                    return (
                        <li key={game.id} className="relative">
                            <div className="flex">
                                <button className="" onClick={
                                    e => router.push(`/games/[id]`, `/games/${game.id}`)
                                }>
                                    <div className="flex items-end w-64">
                                        <img src={game.image} alt="" className="w-24 h-18 rounded-md" />
                                        <div className="font-bold ml-1 truncate">
                                            {game.title}
                                            <span className="flex items-start truncate text-sm text-gray-600 ">{game.description}</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

