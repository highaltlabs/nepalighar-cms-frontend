import Avatar from "../components/Image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import {fetchStrapiAPI} from "../lib/api";

export default function Home({navItems}) {
    return (
        <Layout>
            <Navbar navs={navItems}/>
            <div className="relative flex items-center justify-center overflow-hidden" style={{height: '60vh'}}>
                <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                    <source
                        src={'/baudha.mp4'}
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="py-7 bg-white" style={{height: '35vh'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <div className="p-1 text-2xl">
                            <Avatar src={'/namaste.png'} alt={'namaste logo'} width={''} height={'60'}/> <br/>
                        </div>
                        <h2 className="text-base text-xl text-gray-400 font-semibold tracking-wide font-serif">Welcome
                            to Nepali Ghar Website</h2>
                        <p className="mt-7 max-w-5xl text-2xl text-md text-black lg:mx-auto">
                            Nepal America Sociocultural Exchange Society, Inc, USA (Nepali Ghar) is a registered 501(C)
                            non-profit organization in the state of Colorado.
                        </p>
                        <p className="mt-2 max-w-3xl text-lg text-gray-500 lg:mx-auto font-serif">
                            The organization established to serve our community by promoting congenial relationships and
                            mutual respect among the Nepalese residing
                            in Colorado as well as other local communities. Nepali Ghar’s main focus to develop
                            community by transcending the differences of age, race,
                            color, origin, sexual orientation, religion, belief, disability and nationality,
                            we solemnly initiate a campaign to advocate establishing a community home “Nepali Ghar”
                            and serving our society.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const navItems = await fetchStrapiAPI('/navigation-menu-items?_sort=sort_order:ASC,updated_at:ASC')
    return {
        props: {
            navItems,
        },
    }
}
