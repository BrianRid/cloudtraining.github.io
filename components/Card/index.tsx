import {
  Avatar,
  Heading,
  Text,
  WrapItem,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
import { EducationalResourceDirectory } from "../../utils/data";

const Card = (props: EducationalResourceDirectory) => {
  return (
    <WrapItem
      w="30%"
      h="200px"
      p="3"
      shadow="sm"
      m="1"
      bgColor="gray.600"
      borderRadius="xl"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Flex alignItems={"center"}>
        {/* <Avatar src={props.imageUrl.src} size="sm" /> */}
        <Heading as="h4" fontSize="lg" color="white" pl="4">
          {props.name}
        </Heading>
      </Flex>
      <Divider my="3" />
      <Text color="white" fontSize="sm">
        {props.abstract}
      </Text>
      <Button
        variant="outline"
        color="white"
        borderRadius="3xl"
        position="absolute"
        bottom="5"
        right="5"
      >
        Ouvrir
      </Button>
    </WrapItem>
  );
};

export default Card;
