import { List, ListItem, useColorModeValue } from "@chakra-ui/react"
import { iconMap } from "../data/iconMap"
const MiniSideBar = () => {
    const bg = useColorModeValue('#ffffff', '#3F4055')
    const color = useColorModeValue('#121319', '#DDDDE5')

    return (
        <List>
            {Object.values(iconMap).map((value, index) =>
                <ListItem
                    key={index}
                    placeSelf={"center"}
                    textAlign="center"
                    my="16px"
                    bg={bg}
                    px={4}
                    py={3}
                    fontSize={"24px"}
                    color={color}
                >
                    {value}
                </ListItem>)}
        </List>
    )
}
export default MiniSideBar