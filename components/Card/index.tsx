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
import { EducationalResourceDirectory } from "../../utils/data";

const Card = (props: EducationalResourceDirectory) => {
  console.log(props);

  const displayButton = () => {
    if (props.parts) {
      return (
        <Button
          variant="outline"
          color="white"
          _hover={{ color: "black", bgColor: "white" }}
          borderRadius="3xl"
          position="absolute"
          bottom="5"
          right="5"
          onClick={() => {
            props.setListToDisplay(props.parts);
          }}
        >
          Ouvrir
        </Button>
      );
    } else {
      return (
        <Link
          href={props.articleUrl ? props.articleUrl : props.deploymentUrl}
          target="_blank"
        >
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
        <Avatar src={props.imageUrl.src} size="sm" />
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
