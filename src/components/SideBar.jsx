import { Button, List, ListItem, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { iconMap } from "../data/iconMap";
import { data } from "../data/sidebar";
import styles from "../style/sidebar.module.scss";

const SideBar = () => {
    const { colorMode } = useColorMode()
    const [clickItem, setClickItem] = useState("")
    return (
        <List>
            {data.map(item => (
                <ListItem key={item.id}>
                    <Button onClick={() => setClickItem(item.id)}
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