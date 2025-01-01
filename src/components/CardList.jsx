import { SimpleGrid } from "@chakra-ui/react"
import CardGrid from "./CardGrid"
import mockjs from "mockjs"
import CardContainer from "./CardContainer"
import bg1 from "../assets/images/bg1.png"
import bg2 from "../assets/images/Mobbin.png"
const Random = mockjs.Random
const list = [
    {
        id: Random.id(),
        background_url: bg1,
        description: "参考最重要的就是优质，layers就提供了很多优质的设计案例，推荐去看看",
        link: "https://layers.to/explore/trending"
    },
    {
        id: Random.id(),
        background_url: bg2,
        description: "采集了很多真实的线上的产品的截图，帮助各位设计师更好的找灵感",
        link: "https://mobbin.com/"
    }
]

const CardList = () => {

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={2} spacing={6}>
            {list.map((item) => (
                <CardContainer key={item.id}>
                    <CardGrid listItem={item} test={{ name: "zhangsan" }} />
                </CardContainer>
            ))}
        </SimpleGrid>
    )
}
export default CardList