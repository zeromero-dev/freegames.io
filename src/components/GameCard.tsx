import React from 'react'
import Link from 'next/link'

type GameCardProps = {
    id: number,
    name: string,
    image: string,
    description: string,
    url: string,
    platforms: string,
}

export const GameCard = ({ id, name, image, description, url, platforms }: GameCardProps) => {
    return (
        <div key={id} className='card w-96 bg-base-100 shadow-xl'>
            <img src={image} alt={name} className='flex w-384 h-179' />
            <h1 className='flex text-3xl font-bold ml-2'>{name}</h1>
            <div className='m-2 text-lg line-clamp-3'>
                {description}
            </div>
            <span className='ml-2 font-bold'>Platforms: {platforms} </span>
            <div className="flex gap-x-44">
                <Link href={`/game/${id}`}>
                    <a className="btn btn-primary m-2">
                        MORE INFO
                    </a>
                </Link>
                <button onClick={() => window.open(url)} className="btn btn-primary m-2">
                    GET
                </button>
            </div>
        </div>
    )
}
