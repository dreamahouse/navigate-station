import { Button, List, ListItem, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import dataList from "../data/dataList";
import { iconMap } from "../data/iconMap";
import { data } from "../data/sidebar";
import useCardListStore from "../store";
import styles from "../style/sidebar.module.scss";

const SideBar = () => {
    const { colorMode } = useColorMode()
    const [clickItem, setClickItem] = useState("1")
    const setCardList = useCardListStore(s => s.setCardList)
    useEffect(() => {

    }, [clickItem])
    const handleClick = (item) => {
        setClickItem(item.id)
        setCardList(dataList[item.data])
    }
    return (
        <List>
            {data.map(item => (
                <ListItem key={item.id}>
                    <Button onClick={() =>
                        handleClick(item)
                    }
                        className={clickItem === item.id ? colorMode === "light" ? `${styles["btn"]} ${styles["active"]}` : `${styles["btnBlack"]} ${styles["activeBlack"]}` : colorMode === "light" ? styles.btn : styles.btnBlack}
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