import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {fetchStrapiAPI} from "../lib/api";
import {useEffect, useState} from "react";
import Loading from "./Loading";

const Layout = ({children}) => {
    const [navItems, setNavItems] = useState([])
    const [loadingNav, setLoadingNavs] = useState(true)
    useEffect(() => {
        (async () => {
            const items = await fetchStrapiAPI('/navigation-menu-items?_sort=sort_order:ASC,updated_at:ASC')
            setNavItems(items)
            setLoadingNavs(false)
        })()
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Nepali Ghar - Building Strong Community Together</title>
                <link rel="icon" href="/logo.ico"/>
            </Head>
            <main className="flex flex-col w-full h-full flex-1 text-center">
                {loadingNav ? <Loading/> :
                    <span>
                        <Navbar navs={navItems}/>
                        {children}
                    </span>}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;
