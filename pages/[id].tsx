import { Header } from '../src/components/Header'
import Image from 'next/image'
import ReactPlayer from 'react-player/lazy'

type GameInfo = {
    id: number,
    name: string,
    image: string,
    description: string,
    url: string,
    platforms: string,
    instructions: string,
    status: string,
    type: string,
}

const GameInfo = ({ id, name, image, description, url, platforms, instructions, status, type }: GameInfo) => {
    return (<div>
        <Header />
        <div className="">
            <Image src="https://www.gamerpower.com/offers/1b/5ec4fdb8dbe80.jpg" alt={name} width={420} height={180} />
            <ReactPlayer url="https://www.youtube.com/watch?v=c0i88t0Kacs" />
        </div>
    </div>)
}
export default GameInfo