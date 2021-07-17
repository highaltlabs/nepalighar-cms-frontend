import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {navItems} from "../constant/item";

const Layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Nepali Ghar</title>
                <link rel="icon" href="/logo.ico" />
            </Head>
            <main className="flex flex-col w-full flex-1 text-center">
                <Navbar navs={navItems}/>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;