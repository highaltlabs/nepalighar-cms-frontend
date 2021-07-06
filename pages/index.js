import Head from 'next/head'
import Navigation from "../components/navigation";
import Homepage from "./homepage";
import {fetchNavigationItemsAPI} from "../lib/api";

export default function Home({posts}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Nepali Ghar</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="flex flex-col w-full flex-1 text-center">
          <Navigation navs={posts}/>
          <Homepage/>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by{' '} Nepali Ghar
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
    const posts = (await fetchNavigationItemsAPI()) || []
    return {
        props: { posts },
    }
}
