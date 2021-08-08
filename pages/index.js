import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
    <div 
    //className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Google Doc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>

      <footer className="flex items-center justify-center w-full h-24 border-t">
  footer
      </footer>
    </div>
  )
}
