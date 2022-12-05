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
        <div className="wrapper">
            <Header />
            {/* min-h-screen */}
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="flex fler-row gap-4">
                        <Image src={image} alt={name} width={600} height={300} />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="text-2xl">{description}</p>
                        <p className="py-6">{instructions}</p>
                        <p className='flex text-lg gap-x-0.5'><span className="font-bold">Type:</span>{type}</p>
                        <p className='flex text-lg gap-x-0.5'><span className="font-bold">Platforms:</span>{platforms}</p>
                        <button className="btn btn-primary gap-y-0.5" onClick={() => window.open(url)}>GET</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GameDetails