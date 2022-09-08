import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Game } from '../src/components/Games'
import { ScrollButton } from '../src/components/ScrollButton'
import { Header } from '../src/components/Header'
import { ThemeChanger } from '../src/components/ThemeChanger'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      {/* <ThemeChanger /> */}
      <Game />
      <ScrollButton />
    </div>
  )
}

export default Home
