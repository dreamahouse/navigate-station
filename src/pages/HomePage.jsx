import { Grid, GridItem, Show } from "@chakra-ui/react"
import CardList from "../components/CardList"
import SideBar from "../components/SideBar"

const HomePage = () => {
    return (
        <Grid templateAreas={{ base: `"main"`, lg: `"aside main"` }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
            color="blackAlpha"
        >
            <Show above="lg">
                <GridItem area={"aside"} paddingX={5}>
                    <SideBar />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <CardList />
            </GridItem>
        </Grid>
    )
}
export default HomePage