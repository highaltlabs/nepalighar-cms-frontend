const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="loader bg-white p-5 rounded-full flex space-x-3">
                <div className="w-5 h-5 bg-gray-500 rounded-full animate-bounce"/>
                <div className="w-5 h-5 bg-gray-500 rounded-full animate-bounce"/>
                <div className="w-5 h-5 bg-gray-500 rounded-full animate-bounce"/>
            </div>
        </div>
    )
}

export default Loading
