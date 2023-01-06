import Image from "next/image"
import z from "zod"
import { Header } from "./Header"

const game = z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    url: z.string(),
    platforms: z.string(),
    instructions: z.string(),
    status: z.string(),
    type: z.string(),
    published_date: z.string().optional(),
})

export type GameDetails = z.infer<typeof game>


const GameDetails = ({ title, image, description, id, url, platforms, instructions, status, type }: GameDetails) => {
    return (
        <div className="wrapper">
            <Header />
            {/* min-h-screen */}
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="flex fler-row gap-4">
                        <Image src={image} alt={title} width={600} height={300} />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
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