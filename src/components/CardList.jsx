import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react"
import useCardListStore from "../store"
import CardContainer from "./CardContainer"
import NavigateCard from "./NavigateCard"

const CardList = () => {
    const cardList = useCardListStore(s => s.cardList)
    const bg = useColorModeValue("#F8F9FC", "#121319")
    return (
        <Box h="calc(100vh - 74px)" bg={bg}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={4} spacing={6}>
                {cardList.map((item) => (
                    <CardContainer key={item.id}>
                        <NavigateCard listItem={item} />
                    </CardContainer>
                ))}
            </SimpleGrid>
        </Box>
    )
}
export default CardList