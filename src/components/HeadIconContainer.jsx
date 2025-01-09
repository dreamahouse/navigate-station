import { Box, useColorModeValue } from "@chakra-ui/react"
const HeadIconContainer = ({ children }) => {
    const hoverColor = useColorModeValue("#f8f9fc", "#252631")
    return (
        <Box fontSize={"24px"} _hover={{ color: hoverColor, cursor: "pointer" }}>
            {children}
        </Box>
    )
}
export default HeadIconContainer