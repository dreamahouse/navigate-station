import { Grid, GridItem, Image, Show } from "@chakra-ui/react"
import logo from "../assets/images/logo.png"
import CardList from "../components/CardList"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
const HomePage = () => {
    return (
        <Grid templateAreas={{ base: `"main"`, lg: `"aside main"` }}
            templateColumns={{
                base: "1fr",
                lg: "218px 1fr"
            }}
            color="blackAlpha"

        >
            <Show above="lg">
                <GridItem area={"aside"} paddingX={6}>
                    <Image src={logo} width="144px" h="64px" ml="10px" my="32px" />
                    <SideBar />
                </GridItem>
            </Show>
            <GridItem area={"main"} h="100vh">
                <Header />
                <CardList />
            </GridItem>
        </Grid>
    )
}
export default HomePage