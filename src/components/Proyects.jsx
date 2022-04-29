import React from "react";
import { Text, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Proyects() {
  return (
    <>
      <Text
        padding={4}
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        My proyects
      </Text>
      <Flex>
        <Grid
          bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
          h="50vh"
          w="100%"
          padding={1}
          gap={3}
          templateColumns="repeat(3, 2fr)"
        >
          <GridItem
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius="20px"
            h="40"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <a href="https://retos-summerhack.web.app/" target="_blank">
              <Text padding={2} color="white" fontWeight="bold">
                My first ever webpage
              </Text>
            </a>
            Technologies: HTML, CSS, Firebase
          </GridItem>
          <GridItem
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius="20px"
            h="40"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <a href="https://super-anotador.web.app/" target="_blank">
              <Text padding={2} color="white" fontWeight="bold">
                Supermarket List
              </Text>
            </a>
            Technologies: HTML, Bootstrap, JavaScript, Firebase
          </GridItem>
          <GridItem
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius="20px"
            h="40"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <a href="https://crudevent.web.app/" target="_blank">
              <Text padding={2} color="white" fontWeight="bold">
                CRUD event planner
              </Text>
            </a>
            Technologies: ReactJS, Firebase
          </GridItem>
          <GridItem
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius="20px"
            h="40"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <a href="https://klqla2ra.web.app/" target="_blank">
              <Text padding={2} color="white" fontWeight="bold">
                KLQLA2RA
              </Text>
            </a>
            Technologies: HTML, CSS Grid, JavaScript, Firebase
          </GridItem>
          <GridItem
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius="20px"
            h="40"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            <a href="https://fessito-snake-game.web.app/" target="_blank">
              <Text padding={2} color="white" fontWeight="bold">
                Snake game
              </Text>
            </a>
            Technologies: HTML, CSS Grid, JavaScript, Firebase
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
}
