import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Flex,
  Heading,
  Text,
  Wrap,
} from "@chakra-ui/react";
import _ from "lodash";
import type { NextPage } from "next";
import Card from "../components/Card";
import SearchBar from "../components/Searchbar";
import {
  EducationalResourceDirectory,
  educationalResources,
} from "../utils/data";

const Home: NextPage = () => {
  const displayCards = educationalResources.map(
    (ressource: EducationalResourceDirectory) => {
      return (
        <Card
          key={ressource.name}
          name={ressource.name}
          abstract={ressource.abstract}
          imageUrl={ressource.imageUrl}
          parts={ressource.parts}
        />
      );
    }
  );

  return (
    <Box w="full" h="100vh" bgColor="gray.900" px="12" py="12">
      <Heading color="white" py="12">
        Formations et tutoriels
      </Heading>
      <SearchBar />
      <Breadcrumb mb="6">
        <BreadcrumbItem>
          <Text fontSize="sm" color="white">
            Formations
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>
      <Wrap spacing="20px" w="full" justify="space-between">
        {displayCards}
      </Wrap>
    </Box>
  );
};

export default Home;
