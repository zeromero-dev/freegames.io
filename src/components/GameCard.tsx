import React from 'react'

type GameCardProps = {
    id: number,
    name: string,
    image: string,
    description: string,
    url: string
}

const GameCard = ({ id, name, image, description, url }: GameCardProps) => {
    return (
        <div key={id} className='card w-96 bg-base-100 shadow-xl'>
            <h1 className='text-3xl font-bold underline'>{name}</h1>
            <img src={image} alt={name} className='' />
            <p>{description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">
                    <a href={url}>Get the game</a>
                </button>
            </div>
        </div>
    )
}

export default GameCard


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