import ReactPlayer from "react-player"
import Image from "next/image"

import { Header } from "./Header"

type Game = {
    key: number,
    id: string,
    name: string,
    image: string,
    description: string,
    url: string,
    platforms: string,
    instructions: string,
    status: string,
    type: string,
}


const GameDetails = ({ name, image, description, id, url, platforms, instructions, status, type }: Game) => {
  return (
    <div>
        <Header />
        <div className="flex ">
            <div className='flex-col m-6 ml-12'>
                <ReactPlayer url="https://www.youtube.com/watch?v=c0i88t0Kacs" /> 
                <div className=''>
                    <Image src={image} alt={name} width={600} height={300} />
                </div>
                <div className='text-left break-all mr-27 '>
                    <p className='font-bold text-xl'>{description}</p>
                    <p className='text-lg'>{instructions}</p>
                    <p className='text-lg'>{status}</p>
                    <p className='text-lg'>{type}</p>
                    <p className='text-lg'>{platforms}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameDetails