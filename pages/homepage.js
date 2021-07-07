import Avatar from "../components/Image";

export default function Homepage() {
    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-5 rounded-xl">
                <Avatar src={'/nepali-ghar-logo.png'} alt={'nav logo'} width={'50'} height={'50'}/> <br/>
                Welcome to Nepali Ghar Website!
            </div>
            <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
