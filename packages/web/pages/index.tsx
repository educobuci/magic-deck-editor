import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Made - Magic Deck Editor</title>
        <meta name="description" content="Experimental MTG deck editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full justify-center items-center">
        <h1>
          Welcome to Made!
        </h1>
      </main>
    </div>
  )
}
