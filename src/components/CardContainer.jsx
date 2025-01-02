import { Box } from "@chakra-ui/react"
// eslint-disable-next-line react/prop-types
const CardContainer = ({ children }) => {
    return (
        <Box _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
        }}
            borderRadius={16}
            overflow={"hidden"}
        >
            {children}
        </Box>
    )
}
export default CardContainer