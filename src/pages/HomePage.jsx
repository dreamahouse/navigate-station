import { Box, Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react"
import CardList from "../components/CardList"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import MyLogoIcon from "../components/icon/MyLogoIcon"
const HomePage = () => {
    const borderColor = useColorModeValue("#F7F7F7", "#252631")
    const bg = useColorModeValue("#ffffff", "#111116")
    // base: '0em', // 0px
    // sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
    // md: '48em', // ~768px
    // lg: '62em', // ~992px
    // xl: '80em', // ~1280px
    // '2xl': '96em', // ~1536px

    return (
        <Grid templateAreas={{ base: `"main"`, lg: `"aside main"` }}
            templateColumns={{
                base: "1fr",
                lg: "218px 1fr"
            }}
            color="blackAlpha"

        >
            {/* <Show above="md" below="lg">
                <GridItem area={"aside"} paddingX={4} border={`1px solid ${borderColor}`} bg={bg}>
                    <Image src={logo} w="64px" h="56px" my="32px" />
                    <MiniSideBar />
                </GridItem>
            </Show> */}
            <Show above="lg">
                <GridItem area={"aside"} paddingX={6} border={`1px solid ${borderColor}`} bg={bg}>
                    <Box my="32px" ml="12px">
                        <MyLogoIcon />
                    </Box>
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