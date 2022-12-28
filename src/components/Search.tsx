import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../Games"
import { options_popularity } from "../fetchers/options";
import { useRouter } from "next/router";
export const Search = () => {
    const [search, setSearch] = useState<string>("");
    const router =  useRouter();
    console.log(search)
    // @ts-expect-error (I have no clue why this is happening, need to define "search" as a string maybe?)
    const { data, error, isLoading } = useQuery(["gameData"], search, (async () => await fetchGames(options_popularity)))

    const searchData = Array.isArray(data) ? data.filter((game: any) => game.title.toLowerCase().includes(search.toLowerCase())) : []
    console.log(searchData)
    const handleChange = (event: React.FormEvent) => {
        const target = event.target as HTMLInputElement;
        setSearch(target.value);
    }

    return (
        <div className="input-group">
            <input type="text" placeholder="Search..." className="input input-bordered" onChange={handleChange} value={search} />
            <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          
        </div>
    )
};

