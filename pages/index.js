import Avatar from "../components/Image";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
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
                            <Avatar src={'/nepali-ghar-logo.png'} alt={'nav logo'} width={'50'} height={'50'}/> <br/>
                        </div>
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome to Nepali Ghar Website</h2>
                        <p className="mt-2 max-w-2xl text-md text-gray-500 lg:mx-auto">
                            Nepal America Sociocultural Exchange Society, Inc, USA (Nepali Ghar) is a registered 501(C)
                            non-profit organization in the state of Colorado. The organization established to serve our
                            community by promoting congenial relationships and mutual respect among the Nepalese residing
                            in Colorado as well as other local communities.

                            Nepali Ghar’s main focus to develop community by transcending the differences of age, race,
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
