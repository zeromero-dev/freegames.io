import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../Games";
import { fetchNotifcationGames } from "../Games";
import { options_new } from "../fetchers/options";
import { useRouter } from "next/router";
import { checkIfToday } from "../utils/checkIfToday";

type NotificationBellProps = {
  title: string;
  description: string;
  image: string;
  id: string;
  published_date: string;
}

export const NotificationBell = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery(["notification"], () => fetchGames(options_new), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  Notification.requestPermission();
  const showNotification = () => {
    const notification = new Notification('FreeGames.io', {
      body: 'New games are available! Check them out now!',
      icon: './img/js.png'
    });

    setTimeout(notification.close.bind(notification), 5000);
    //on click redierects
    notification.addEventListener('click', () => {
      window.open('https://freegames-io.vercel.app/games/new', '_blank');
    });
  };

  if(data?.length > 0 && checkIfToday(data[0].published_date) === true) {
    showNotification();
  }

  return (
    <button className="btn btn-ghost btn-circle z-29">
      <div className="flex dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80 relative">
          {
            data?.map((item: NotificationBellProps) => {
              if (checkIfToday(item.published_date) === false) return <div key={item.id}>No new games yet</div>;
              return (
                <li key={item.id} className="flex">
                  <div className="container for everything">
                    <button className="" onClick={
                      e => router.push(`/games/[id]`, `/games/${item.id}`)
                    }>
                      <div className="flex items-end w-64">
                        <img src={item.image} alt="" className="w-24 h-18 rounded-md" />
                        <div className="font-bold ml-1 truncate">
                          {item.title}
                          <span className="flex items-start truncate text-sm text-gray-600 ">{item.description}</span>
                          <span className="flex items-start badge badge-notification badge-secondary text-sm">NEW</span>
                        </div>
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
