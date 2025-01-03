import { HStack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import head1 from "../assets/images/head1.png"
import head2 from "../assets/images/head2.png"
import head3 from "../assets/images/head3.png"
import logo from "../assets/images/logo.png"
import ImageHead from "./ImageHead"
const NavBar = () => {
    return (
        <HStack padding="5px" display="flex" w="100vw" justifyContent="space-between">
            <Link to="/">
                <Image src={logo} boxSize="100px" objectFit={"cover"} />
            </Link>
            <HStack >
                <ImageHead src={head1} />
                <ImageHead src={head2} />
                <ImageHead src={head3} />
            </HStack>
        </HStack >
    )
}
export default NavBar