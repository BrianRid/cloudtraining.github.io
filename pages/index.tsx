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
import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/Searchbar";
import {
  EducationalResource,
  EducationalResourceDirectory,
  educationalResources,
} from "../utils/data";

const Home: NextPage = () => {
  const [listToDisplay, setListToDisplay] =
    useState<(EducationalResourceDirectory | EducationalResource)[]>(
      educationalResources
    );

  const displayCards = listToDisplay.map(
    (ressource: EducationalResourceDirectory | EducationalResource) => {
      return (
        <Card
          key={ressource.name}
          name={ressource.name}
          abstract={ressource.abstract}
          imageUrl={ressource.imageUrl}
          parts={ressource.parts}
          articleUrl={ressource.articleUrl}
          deploymentUrl={ressource.deploymentUrl}
          setListToDisplay={setListToDisplay}
        />
      );
    }
  );

  return (
    <Box w="full" h="full" bgColor="gray.900" px="12" py="12">
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
