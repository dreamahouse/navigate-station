import { Button, List, ListItem } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { BsColumnsGap, BsCommand, BsJournalBookmark } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiFoldersLine } from "react-icons/ri";
import styles from "../style/sidebar.module.scss";
const iconMap = {
    "MdOutlineLightbulb": <MdOutlineLightbulb />,
    "IoColorPaletteOutline": <IoColorPaletteOutline />,
    "BsColumnsGap": <BsColumnsGap />,
    "RiFoldersLine": <RiFoldersLine />,
    "BsCommand": <BsCommand />,
    "BsJournalBookmark": <BsJournalBookmark />,
    "FaFigma": <FaFigma />,
}

const data = [
    {
        id: nanoid(),
        name: '色彩搭配',
        icon: "MdOutlineLightbulb",
    },
    {
        id: nanoid(),
        name: '灵感参考',
        icon: "IoColorPaletteOutline",
    },
    {
        id: nanoid(),
        name: '排版美化',
        icon: "BsColumnsGap",
    },
    {
        id: nanoid(),
        name: '素材资源',
        icon: "RiFoldersLine",
    },
    {
        id: nanoid(),
        name: '图标设计',
        icon: "BsCommand",
    },
    {
        id: nanoid(),
        name: '设计周刊',
        icon: "BsJournalBookmark",
    },
    {
        id: nanoid(),
        name: 'Figma插件',
        icon: "FaFigma",
    },
]
const SideBar = () => {
    const [clickItem, setClickItem] = useState("")
    return (
        <List>
            {data.map(item => (
                <ListItem key={item.id}>
                    <Button onClick={() => setClickItem(item.id)}
                        className={clickItem === item.id ? `${styles["btn"]} ${styles["active"]}` : styles.btn}
                        justifyContent="start"
                        px="38px"
                        w="170px"
                        h="48px"
                        my="8px"
                        borderRadius="12px"
                        fontWeight={"400"}
                        fontSize={"16px"}
                        leftIcon={iconMap[item.icon]}
                    >
                        {item.name}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}
export default SideBar