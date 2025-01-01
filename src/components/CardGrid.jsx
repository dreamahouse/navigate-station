import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
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
            <Image
                src={listItem.background_url}
                alt={listItem.description}
                fallback={<Text>图片加载中...</Text>}
            />
            <CardBody>
                <Heading fontSize="2xl">
                    <Text>{listItem.description}</Text>
                    <Link to={listItem.link}>{listItem.link}</Link>
                </Heading>
            </CardBody>
        </Card>
    )
}



export default CardGrid