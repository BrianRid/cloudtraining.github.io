import {
  Avatar,
  Box,
  Heading,
  Text,
  WrapItem,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  EducationalResource,
  EducationalResourceDirectory,
} from "../../utils/data";

const Card = (props: EducationalResourceDirectory) => {
  return (
    <WrapItem
      w="30%"
      p="3"
      shadow="sm"
      m="1"
      bgColor="gray.600"
      borderRadius="xl"
    >
      <Box>
        <Flex alignItems={"center"}>
          <Avatar src={props.imageUrl.src} size="sm" />
          <Heading as="h4" fontSize="lg" color="white" pl="4">
            {props.name}
          </Heading>
        </Flex>
        <Text color="white" fontSize="sm">
          {props.abstract}
        </Text>
        <Button variant="outline" color="white" borderRadius="3xl">
          Ouvrir
        </Button>
      </Box>
    </WrapItem>
  );
};

export default Card;
