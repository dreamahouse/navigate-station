import { Image } from "@chakra-ui/react"
// eslint-disable-next-line react/prop-types
const ImageHead = ({ src, boxSize }) => {

    return (
        <Image boxSize={boxSize} src={src} objectFit={"cover"} />
    )
}
export default ImageHead