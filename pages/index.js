import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import Header1 from '../components/Design1/Header'
import Header2 from '../components/Design2/Header'
import Header3 from '../components/Design3/Header'

export default function Home() {

  // [0, 1, 2] = 3 Designs
  const [designIndex, setDesignIndex] = useState(0)

  if (designIndex === 0) {
    return (
      <>
        <Head>
          <title>Lucas Gontijo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header1>
            
          </Header1>
        </main>

        <footer></footer>
      </>
    )
  } else if (designIndex === 1) {
    return (
      <></>
    )
  } else {
    return (
      <></>
    )
  }
}