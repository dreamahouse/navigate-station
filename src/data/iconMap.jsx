import { BsColumnsGap, BsCommand, BsJournalBookmark } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiFoldersLine } from "react-icons/ri";
import MyColorIcon from "../components/icon/MyColorIcon";
import MyInspirationIcon from "../components/icon/MyInspirationIcon";
import { PlusSquareIcon } from "@chakra-ui/icons";
import MyLayoutIcon from "../components/icon/MyLayoutIcon"
import MyResourceIcon from "../components/icon/MyResourceIcon"
import MyIcon from "../components/icon/MyIcon";
import MyWeeklyIcon from "../components/icon/MyWeeklyIcon";
import MyFigmaIcon from "../components/icon/MyFigmaIcon";
export const iconMap = {
    "MdOutlineLightbulb": <MyColorIcon />,
    "IoColorPaletteOutline": <MyInspirationIcon />,
    "BsColumnsGap": <MyLayoutIcon />,
    "RiFoldersLine": <MyResourceIcon />,
    "BsCommand": <MyIcon />,
    "BsJournalBookmark": <MyWeeklyIcon />,
    "FaFigma": <MyFigmaIcon />,
}