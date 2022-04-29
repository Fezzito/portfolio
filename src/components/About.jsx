import React from "react";
import { Flex, Image, Text, VStack, HStack } from "@chakra-ui/react";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div>
      <Flex
        h="100vh"
        w="100%"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
      >
        <HStack>
          <Flex>
            <Image src={profile} borderRadius="full" m="3%" />
          </Flex>
          <VStack paddingLeft="15px">
            <Text fontSize="5xl" fontWeight="extrabold">
              Fernando Zeitler, frontend developer.
            </Text>
            <p>
              Finishing my Industrial Design career, comprehending in depth
              concepts of UX/UI, design thinking and human-centered design.
            </p>
            <p>
              Always looking forward to be not just a better dev, but instead
              unleashing all my potential as a team player, building products
              and also friendships.
            </p>
            <p>
              Strongly intereseted in crypto and fintech products, leveraging to
              solve the issues the traditional sistem created and all the
              struggles we all once had.
            </p>
          </VStack>
        </HStack>
      </Flex>
    </div>
  );
}
