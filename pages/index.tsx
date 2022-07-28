import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Wrap,
  Link,
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
      if ("parts" in ressource) {
        return (
          <Card
            key={ressource.name}
            name={ressource.name}
            abstract={ressource.abstract}
            imageUrl={ressource.imageUrl.src}
            onClick={() => setListToDisplay(ressource.parts)}
          />
        );
      } else {
        return (
          <Card
            key={ressource.name}
            name={ressource.name}
            abstract={ressource.abstract}
            imageUrl={ressource.imageUrl.src}
            articleUrl={ressource.articleUrl}
            deploymentUrl={ressource.deploymentUrl}
          />
        );
      }
    }
  );

  return (
    <Box w="full" minHeight="100vh" h="full" bgColor="gray.900" px="12" py="12">
      <Heading color="white" py="12">
        Formations et tutoriels
      </Heading>
      <SearchBar />
      <Link href="/">
        <Button mb="6">
          <Text>Accueil</Text>
        </Button>
      </Link>
      <Wrap spacing="20px" w="full" justify="space-between">
        {displayCards}
      </Wrap>
    </Box>
  );
};

export default Home;
