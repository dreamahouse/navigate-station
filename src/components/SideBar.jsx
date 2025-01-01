import { List, ListItem, Image, HStack, Button } from "@chakra-ui/react"
import icon1 from "../assets/images/icon_color.png"
const data = [
    {
        id: 1,
        name: '色彩搭配',
        imgurl: icon1
    },
    {
        id: 2,
        name: '灵感参考',
        imgurl: icon1
    }
]
const SideBar = () => {
    return (
        <List>
            {data.map(item => (
                <ListItem key={item.id}>
                    <HStack>
                        <Image src={item.imgurl} boxSize={"32px"} />
                        <Button fontSize="large" title={item.name}>
                            {item.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    )
}
export default SideBar