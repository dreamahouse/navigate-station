import { SimpleGrid } from "@chakra-ui/react"
import mockjs from "mockjs"
import bg1 from "../assets/images/bg1.png"
import bg2 from "../assets/images/bg2.png"
import bg3 from "../assets/images/bg3.png"
import bg4 from "../assets/images/bg4.png"
import bg5 from "../assets/images/bg5.png"
import CardContainer from "./CardContainer"
import NavigateCard from "./NavigateCard"
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
    },
    {
        id: Random.id(),
        background_url: bg3,
        description: "采集了很多真实的上线的 App 的页面，更多是国内的, 国产mobbin",
        link: "https://uinotes.com/"
    },
    {
        id: Random.id(),
        background_url: bg4,
        description: "可以按照组件的类别来查找灵感，这个思路很好，更加有针对性",
        link: "https://calltoinspiration.com/"
    },
    {
        id: Random.id(),
        background_url: bg5,
        description: "韩国版花瓣，不得不说韩国的很多设计还是很具有参考性的，可以浏览找找灵感",
        link: "https://wwit.design/"
    },
]

const CardList = () => {

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={4} spacing={6}>
            {list.map((item) => (
                <CardContainer key={item.id}>
                    <NavigateCard listItem={item} />
                </CardContainer>
            ))}
        </SimpleGrid>
    )
}
export default CardList