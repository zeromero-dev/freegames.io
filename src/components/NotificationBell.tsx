import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../Games";
import { fetchNotifcationGames } from "../Games";
import { options_new } from "../fetchers/options";
import { useRouter } from "next/router";
import { checkIfToday } from "../utils/checkIfToday";

type NotificationBellProps = {
  name: string;
  desription: string;
  image: string;
  id: string;
  published_date: string;
}

export const NotificationBell = () => {
  const router = useRouter();

  const { isSuccess, data, isLoading, isError } = useQuery(["notification"], () => fetchGames(options_new), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
  });
  // if (isLoading) return <div>Loading</div>

  return (
    <button className="btn btn-ghost btn-circle">
      <div className="flex dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-64 z-29 relative">
          {
            data?.map((item: NotificationBellProps) => {
              if (checkIfToday(item.published_date) === false) return null;
              return (
                <li key={item.id} className="overflow-y-auto">
                  <div className="flex">
                    <button className="" onClick={
                      e => router.push(`/games/[id]`, `/games/${item.id}`)
                    }>
                      <img src={item.image} alt="" className="w-12 h-12 rounded-md" />

                      <div className="flex-1 mx-3">
                        <span className="font-bold">{item.name}</span>
                        <span className="text-sm text-gray-600">{item.desription}</span>
                      </div>
                    </button>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </button>
  )
}
{/* <span className="badge badge-xs badge-primary indicator-item"></span> */ }
