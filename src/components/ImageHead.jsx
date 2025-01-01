import { Image } from "@chakra-ui/react"
// eslint-disable-next-line react/prop-types
const ImageHead = ({ src }) => {

    return (
        <Image boxSize="40px" src={src} objectFit={"cover"} />
    )
}
export default ImageHead