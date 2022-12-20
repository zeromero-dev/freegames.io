import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Game } from '../src/Games'
import { ScrollButton } from '../src/components/ScrollButton'
import { Header } from '../src/components/Header'


const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Game />
      <ScrollButton />
    </div>
  )
}

export default Home
