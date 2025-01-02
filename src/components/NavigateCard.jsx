import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Card>
            <CardBody>
                <Image
                    src={listItem.background_url}
                    alt={listItem.description}
                    border="1px dotted #000"
                    fallback={<Text>图片加载中...</Text>}
                />
                <Stack mt="6" spacing="3">
                    <Heading size="s">
                        {listItem.description.length > 32 ? listItem.description.substring(0, 32) + "..." : listItem.description}
                    </Heading>
                    <Link to={listItem.link}>{listItem.link.length > 24 ? listItem.link.substring(0, 24) + "..." : listItem.link}</Link>
                </Stack>
            </CardBody>
        </Card>
    )
}



export default CardGrid