import Image from 'next/image'

function Avatar({ src, width, height, alt }) {
    return <Image src={src} alt={alt} width={width} height={height} />
}

export default Avatar
