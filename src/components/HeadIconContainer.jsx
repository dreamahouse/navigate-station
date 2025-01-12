import { Box, useColorModeValue } from "@chakra-ui/react"
const HeadIconContainer = ({ children }) => {
    const hoverColor = useColorModeValue("#f8f9fc", "#252631")
    return (
        <Box fontSize={"24px"} p={3} borderRadius={12} _hover={{ bgColor: hoverColor, cursor: "pointer" }}>
            {children}
        </Box>
    )
}
export default HeadIconContainer