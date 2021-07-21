import Layout from "../components/Layout";
import Image from 'next/image'

const FeaturePage = () => {
    return (
        <Layout>
            <div className="relative">
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                    src={'/flag.jpg'}
                    alt={'Flag Features'}
                />
                <div className="relative z-1" style={{height: '60vh'}}/>
            </div>
            <div className="py-12 bg-white" style={{height: '35vh'}}>
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 max-w-2xl text-md text-gray-500 lg:mx-auto">
                            Nepal America Sociocultural Exchange Society, Inc, USA (Nepali Ghar) is a registered 501(C)
                            non-profit organization in the state of Colorado. The organization established to serve our
                            community by promoting congenial relationships and mutual respect among the Nepalese
                            residing
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

export default FeaturePage
