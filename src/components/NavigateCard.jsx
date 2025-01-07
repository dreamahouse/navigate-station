import { Card, CardBody, Image, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { PiShareFat } from "react-icons/pi";
const CardGrid = ({ listItem }) => {
    const bg = useColorModeValue("#ffffff", "#161B26")
    const bc = useColorModeValue("#F1F3F9", "#1F242F")

    if (!listItem) {
        return (
            <Card>
                <CardBody>
                    <Text>数据加载中...</Text>
                </CardBody>
            </Card>
        );
    }

    return (
        <Card bg={bg} border={`1px solid ${bc}`} borderRadius={"16px"}>
            <CardBody padding={"12px 16px 16px"}>
                <Image
                    src={listItem.background_url}
                    alt={listItem.description}
                    objectFit="cover"
                    borderRadius={"8px"}
                    fallback={<Text>图片加载中...</Text>}
                />
                <Stack mt="6" spacing="3">
                    <Text
                        noOfLines={2}
                        fontSize={"14px"}
                        title={listItem.description}
                    >
                        {listItem.description}
                    </Text>
                    <Link
                        fontSize={"14px"}
                        fontWeight={"400"}
                        title={listItem.link}
                        overflow="hidden"
                        whiteSpace={"nowrap"}
                        textOverflow={"ellipsis"}
                        href={listItem.link}
                        isExternal
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {listItem.link}
                        <PiShareFat />
                    </Link>
                </Stack>
            </CardBody>
        </Card>
    )
}



export default CardGrid