import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Game } from '../src/components/Games'
import { ScrollButton } from '../src/components/ScrollButton'

const Home: NextPage = () => {
  return (
    <div>
      <Game />
      <ScrollButton />
    </div>
  )
}

export default Home
