/* eslint-disable @next/next/no-img-element */
import { checkIfNew } from '../utils/checkIfNew'
import { useRouter } from 'next/router'
import z from 'zod'

const gameCard = z.object({
    id: z.string(),
    title: z.string(),
    image: z.string(),
    description: z.string(),
    url: z.string(),
    platforms: z.string(),
    published_date: z.string().optional()
})

export type GameCard = z.infer<typeof gameCard>


export const GameCard = ({ id, title, image, description, url, platforms, published_date }: GameCard) => {
    const router = useRouter()
    return (
        <div key={id} className='card w-96 bg-base-100 shadow-xl'>
            <img src={image} alt={title} className='flex w-384 h-179' />
            <h1 className='flex text-3xl font-bold ml-2'>{title}</h1>
            {checkIfNew(published_date!) === true ? <div className="badge badge-secondary ml-2 font-bold">NEW</div> : null}
            <div className='m-2 text-lg line-clamp-3'>
                {description}
            </div>
            <span className='ml-2 font-bold'>Platforms:
                <span className='ml-1 text-accent'>{platforms}</span>
            </span>
            <div className="flex gap-x-44">
                <button className='btn btn-primary m-2'
                    onClick={
                        e => router.push(`/games/[id]`, `/games/${id}`)
                    }>
                    MORE INFO
                </button>
                <button onClick={() => window.open(url)} className="btn btn-primary m-2">
                    GET
                </button>
            </div>
        </div>
    )
}
