import { Flex, useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { HiMiniLanguage } from "react-icons/hi2";
const Header = () => {
    const { toggleColorMode } = useColorMode()
    return (
        <Flex justifyContent={"flex-end"} gap={4} paddingX={"40px"} paddingY={"25px"}>
            <FiSun onClick={toggleColorMode} size={"24px"} />
            <HiMiniLanguage size="24px" />
            <FaGithub size="24px" />
        </Flex>
    )
}
export default Header