import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMiniLanguage } from "react-icons/hi2";
import HeadIconContainer from "./HeadIconContainer";
import MyLightThemeIcon from "./icon/MyLightThemeIcon";
import MyGithubIcon from "./icon/MyGithubIcon";
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("ffffff", "#111116")
    return (
        <Flex bg={bg} justifyContent={"flex-end"} gap={4} paddingX={"40px"} paddingY={"25px"}>
            <HeadIconContainer>
                {colorMode === "light" ? <FiMoon onClick={toggleColorMode} /> : <FiSun onClick={toggleColorMode} />}
            </HeadIconContainer>
            <HeadIconContainer>
                <HiMiniLanguage size="24px" />
            </HeadIconContainer>
            <HeadIconContainer>
                <FaGithub size="24px" />
            </HeadIconContainer>
        </Flex>
    )
}
export default Header