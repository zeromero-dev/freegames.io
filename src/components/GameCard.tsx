import React from 'react'

type GameCardProps = {
    id: number,
    name: string,
    image: string,
    description: string,
    url: string,
    platforms: string,
}

const GameCard = ({ id, name, image, description, url, platforms }: GameCardProps) => {
    return (
        <div key={id} className='card w-96 bg-base-100 shadow-xl'>
            <img src={image} alt={name} className='flex w-384 h-179' />
            <h1 className='flex text-3xl font-bold ml-2'>{name}</h1>
            <div className='m-2 text-lg text-ellipsis '>
                {description}
            </div>
            <span className='ml-2 font-bold'>Platforms: {platforms} </span>
            <div className="card-actions justify-end">

                <button onClick={() => window.open(url)} className="btn btn-primary m-2">
                    GET
                </button>
            </div>
        </div>
    )
}

export default GameCard

//384 × 179 px
//     < div class="card w-96 bg-base-100 shadow-xl" >
//   <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
//   <div class="card-body">
//     <h2 class="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div >