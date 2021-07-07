import Head from 'next/head'
import Navbar from "../components/Navbar";
import Homepage from "./homepage";
import {fetchNavigationItemsAPI} from "../lib/api";
import Footer from "../components/Footer";

export default function Home({posts}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Nepali Ghar</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 text-center">
          <Navbar navs={posts}/>
          <Homepage/>
      </main>
     <Footer/>
    </div>
  )
}

export async function getServerSideProps() {
    const posts = (await fetchNavigationItemsAPI()) || []
    return {
        props: { posts },
    }
}
