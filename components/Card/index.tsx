import {
  Avatar,
  Heading,
  Text,
  WrapItem,
  Flex,
  Button,
  Divider,
  Link,
  Box,
  Badge,
} from "@chakra-ui/react";
import _ from "lodash";
import { CardProps } from "./interface";

const Card = (props: CardProps) => {
  const displayButton = () => {
    if (props.onClick) {
      return (
        <Button
          variant="outline"
          color="gray.900"
          _hover={{ color: "white", bgColor: "#FF562C" }}
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
      if (props.articleUrl && props.deploymentUrl) {
        return (
          <Box
            position="absolute"
            bottom="5"
            right="5"
            display="flex"
            justifyContent="space-between"
          >
            <Link href={props.articleUrl} target="_blank">
              <Button
                variant="outline"
                color="gray.900"
                _hover={{ color: "white", bgColor: "#FF562C" }}
                borderRadius="3xl"
                marginRight="3"
              >
                Lire
              </Button>
            </Link>
            <Link href={props.deploymentUrl} target="_blank">
              <Button
                variant="outline"
                color="gray.900"
                _hover={{ color: "white", bgColor: "#FF562C" }}
                borderRadius="3xl"
              >
                Lancer
              </Button>
            </Link>
          </Box>
        );
      } else if (props.deploymentUrl) {
        return (
          <Link href={props.deploymentUrl} target="_blank">
            <Button
              variant="outline"
              color="gray.900"
              _hover={{ color: "white", bgColor: "#FF562C" }}
              borderRadius="3xl"
              position="absolute"
              bottom="5"
              right="5"
            >
              Lancer
            </Button>
          </Link>
        );
      } else if (props.articleUrl) {
        return (
          <Link href={props.articleUrl} target="_blank">
            <Button
              variant="outline"
              color="gray.900"
              _hover={{ color: "white", bgColor: "#FF562C" }}
              borderRadius="3xl"
              position="absolute"
              bottom="5"
              right="5"
            >
              Lire
            </Button>
          </Link>
        );
      }
    }
  };

  const displayTags = () => {
    if (props.tags) {
      return (
        <Box>
          {props.tags.map((tag: string) => {
            let color = "";
            if (tag === "Apprendre") {
              color = "green";
            } else if (tag === "Apprendre") {
              color = "red";
            } else {
              color = "blue";
            }
            return (
              <Badge
                key={tag}
                colorScheme={color}
                mr={2}
                my={2}
                borderRadius="3xl"
                p="1"
              >
                {tag}
              </Badge>
            );
          })}
        </Box>
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
      bgColor="white"
      borderRadius="xl"
      display="flex"
      boxShadow="xl"
      flexDirection="column"
      position="relative"
    >
      <Flex alignItems={"center"}>
        <Avatar src={props.imageUrl} size="sm" />
        <Heading as="h4" fontSize="lg" color="gray.900" pl="4">
          {props.name}
        </Heading>
      </Flex>
      <Divider my="3" />
      <Text color="gray.900" fontSize="sm">
        {props.abstract}
      </Text>
      {displayTags()}
      {displayButton()}
    </WrapItem>
  );
};

export default Card;
