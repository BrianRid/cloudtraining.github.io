import {
  Avatar,
  Heading,
  Text,
  WrapItem,
  Flex,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";
import { CardProps } from "./interface";

const Card = (props: CardProps) => {
  const displayButton = () => {
    if (props.onClick) {
      return (
        <Button
          variant="outline"
          color="white"
          _hover={{ color: "black", bgColor: "white" }}
          borderRadius="3xl"
          position="absolute"
          bottom="5"
          right="5"
          onClick={props.onClick}
        >
          Ouvrir
        </Button>
      );
    } else {
      return (
        <Link href={props.url} target="_blank">
          <Button
            variant="outline"
            color="white"
            _hover={{ color: "black", bgColor: "white" }}
            borderRadius="3xl"
            position="absolute"
            bottom="5"
            right="5"
          >
            Ouvrir
          </Button>
        </Link>
      );
    }
  };
  return (
    <WrapItem
      w="30%"
      p="3"
      shadow="sm"
      m="1"
      pb="24"
      bgColor="gray.600"
      borderRadius="xl"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Flex alignItems={"center"}>
        <Avatar src={props.imageUrl} size="sm" />
        <Heading as="h4" fontSize="lg" color="white" pl="4">
          {props.name}
        </Heading>
      </Flex>
      <Divider my="3" />
      <Text color="white" fontSize="sm">
        {props.abstract}
      </Text>
      {displayButton()}
    </WrapItem>
  );
};

export default Card;
