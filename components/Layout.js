import Head from "next/head";
import {useEffect, useState} from "react";

const Layout = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Nepali Ghar - Building Strong Community Together</title>
                <link rel="icon" href="/logo.ico"/>
            </Head>
            <main className="flex flex-col w-full h-full flex-1 text-center relative">
                <div className="h-auto w-full">
                    {children}
                </div>
                {isVisible &&
                <div className="absolute bottom-0 right-0 h-16 w-16 text-black bg-black m-5
                bg-opacity-10 flex justify-center pt-5 rounded cursor-pointer text-lg"
                     onClick={scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                    </svg>
                </div>}
            </main>
        </div>
    );
}

export default Layout;
