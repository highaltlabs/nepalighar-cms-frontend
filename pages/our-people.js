import Layout from "../components/Layout";
import Image from "next/image";
import Navbar from "../components/Navbar";
import {fetchStrapiAPI} from "../lib/api";

const PeoplePage = ({navItems}) => {
    return (
        <Layout>
            <Navbar navs={navItems}/>
            <div className="relative">
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                    src={'/river.jpg'}
                    alt={'Flag Features'}
                />
                <div className="relative z-1" style={{height: '60vh'}}/>
            </div>
            <div className="py-12 bg-white" style={{height: '35vh'}}>
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 max-w-2xl text-md text-gray-500 lg:mx-auto">
                            Nepali Ghar’s member supports each other as we work towards our common goal of
                            building Nepalese Community Home in the state of Colorado as well as to build
                            strong community together.  Working together, we can serve our community by
                            promoting congenial relationship and mutual respect among the Nepalese residing
                            in Colorado and other local communities. We are together to share common goal
                            to advocate and establishing common community home “Nepali Ghar” and our vibrant community and society.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PeoplePage

export async function getServerSideProps() {
    const navItems = await fetchStrapiAPI('/navigation-menu-items?_sort=sort_order:ASC,updated_at:ASC')
    return {
        props: {
            navItems
        }
    }
}
