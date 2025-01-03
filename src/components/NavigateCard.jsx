import { Card, CardBody, Heading, Image, Stack, Text, Link } from "@chakra-ui/react";
import { PiShareFat } from "react-icons/pi";
const CardGrid = ({ listItem }) => {

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
        <Card border="1px solid #f1f3f9" borderRadius={"16px"}>
            <CardBody>
                <Image
                    src={listItem.background_url}
                    alt={listItem.description}
                    border="1px dotted #000"
                    objectFit="cover"
                    borderRadius={"16px"}
                    fallback={<Text>图片加载中...</Text>}
                />
                <Stack mt="6" spacing="3">
                    <Heading fontSize={"15px"} fontWeight={"400"}>
                        {listItem.description}
                    </Heading>
                    <Link fontSize={"15px"} fontWeight={"400"} href={listItem.link} isExternal display="flex" justifyContent="space-between" alignItems="center">
                        {listItem.link}<PiShareFat />
                    </Link>
                </Stack>
            </CardBody>
        </Card>
    )
}



export default CardGrid