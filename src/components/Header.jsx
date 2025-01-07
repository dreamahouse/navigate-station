import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMiniLanguage } from "react-icons/hi2";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("ffffff", "#111116")
    return (
        <Flex bg={bg} justifyContent={"flex-end"} gap={4} paddingX={"40px"} paddingY={"25px"}>
            {colorMode === "light" ? <FiSun onClick={toggleColorMode} size={"24px"} /> : <FiMoon onClick={toggleColorMode} size={"24px"} />}
            <HiMiniLanguage size="24px" />
            <FaGithub size="24px" />
        </Flex>
    )
}
export default Header