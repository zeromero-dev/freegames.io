import Link from 'next/link'
import { useRouter } from 'next/router'

export type GameCardProps = {
    id?: number,
    name?: string,
    image?: string,
    description?: string,
    url?: string,
    platforms?: string,
}

export const GameCard = ({ id, name, image, description, url, platforms }: GameCardProps) => {
    const router = useRouter()

    return (
        <div key={id} className='card w-96 bg-base-100 shadow-xl'>
            <img src={image} alt={name} className='flex w-384 h-179' />
            {/* <Image src={image} alt={name} width={384} height={179} /> */}
            <h1 className='flex text-3xl font-bold ml-2'>{name}</h1>
            <div className='m-2 text-lg line-clamp-3'>
                {description}
            </div>
            <span className='ml-2 font-bold'>Platforms: {platforms} </span>
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
