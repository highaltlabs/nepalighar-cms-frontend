import Avatar from "../components/Image";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import {fetchStrapiAPI} from "../lib/api";

export default function Home({navItems}) {
    return (
        <Layout>
            <Navbar navs={navItems}/>
            <div className="relative flex items-center justify-center overflow-hidden" style={{height: '55vh'}}>
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
                        <div className="p-2 text-2xl">
                            <Avatar src={'/welcome-to.svg'} alt={'namaste logo'} width={''} height={'120'}/> <br/>
                        </div>
                        <p className="mt-1 max-w-5xl text-2xl text-md text-black lg:mx-auto">
                            Nepal America Sociocultural Exchange Society, Inc, USA (Nepali Ghar) is a registered 501(C)
                            non-profit organization in the state of Colorado.
                        </p>
                        <p className="mt-3 max-w-2xl text-lg text-gray-600 lg:mx-auto font-serif">
                            The organization established to serve our community by promoting congenial relationships and
                            mutual respect among the Nepalese residing
                            in Colorado as well as other local communities. Nepali Ghar’s main focus to develop
                            community by transcending the differences of age, race,
                            color, origin, sexual orientation, religion, belief, disability and nationality,
                            we solemnly initiate a campaign to advocate establishing a community home “Nepali Ghar”
                            and serving our society.
                        </p>
                        <div className="pt-7 text-2xl">
                            <Avatar src={'/namaste.svg'} alt={'namaste logo'} width={''} height={'100'}/> <br/>
                        </div>
                        <div className="pt-5 text-2xl">
                            <Avatar src={'/hands.png'} alt={'hands logo'} width={''} height={'290'}/> <br/>
                        </div>
                    </div>
                </div>
                <div className="flex info-div">
                    <div className="info-detail flex flex-wrap content-center">
                        <p className="max-w-2xl text-3xl font-black lg:mx-auto font-serif">
                            Nepali Ghar’s main focus to develop
                            community by transcending the differences of age, race,
                            color, origin, sexual orientation, religion, belief, disability and nationality,
                            we solemnly initiate a campaign to advocate establishing a community home “Nepali Ghar”
                            and serving our society.
                        </p>
                    </div>
                    <div className="info-background"/>
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
