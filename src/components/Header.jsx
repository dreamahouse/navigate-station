import ImageHead from "./ImageHead"
import head1 from "../assets/images/head1.png"
import head2 from "../assets/images/head2.png"
import head3 from "../assets/images/head3.png"
import { Flex } from "@chakra-ui/react"
const Header = () => {
    return (
        <Flex bg="#fff" justifyContent={"flex-end"} gap={2} padding={4}>
            <ImageHead src={head1} boxSize="24px" />
            <ImageHead src={head2} boxSize="24px" />
            <ImageHead src={head3} boxSize="24px" />
        </Flex>
    )
}
export default Header