import Head from "next/head";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Nepali Ghar - Building Strong Community Together</title>
                <link rel="icon" href="/logo.ico"/>
            </Head>
            <main className="flex flex-col w-full h-full flex-1 text-center">
               {children}
            </main>
        </div>
    );
}

export default Layout;
