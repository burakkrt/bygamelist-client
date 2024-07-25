import Head from 'next/head'
import Metin2ServerList from '@/components/metin2-server-list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Metin2ServerList />
    </>
  )
}
