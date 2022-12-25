import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const Search = () => {
    const [search, setSearch] = useState<string>("");
    console.log(search)

    const handleChange = (event: React.FormEvent) => {
        const target = event.target as HTMLInputElement;
        setSearch(target.value);
    }

    //   const [data, isError, isSuccess] = useQuery(["search", search], );

    return (
        <div className="input-group">
            <input type="text" placeholder="Search..." className="input input-bordered" onChange={handleChange} value={search} />
            <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
    )
};

