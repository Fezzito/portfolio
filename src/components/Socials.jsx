import React from "react";
import { Text, Flex, Center } from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";

export default function Socials() {
  return (
    <>
      <Text
        fontSize="5xl"
        fontWeight="extrabold"
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        padding={4}
      >
        My socials
      </Text>
      <Flex
        bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
        w="100%"
        padding={1}
        gap={3}
        templateColumns="repeat(4, 1fr)"
      >
        <Center
          bgGradient="linear(to-r, teal.500, green.500)"
          borderRadius="20px"
          h="40"
          w="22%"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <a href="https://github.com/Fezzito" target="_blank">
            <AiFillGithub size="5em" />
          </a>
        </Center>
        <Center
          bgGradient="linear(to-r, teal.500, green.500)"
          borderRadius="20px"
          h="40"
          w="22%"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <a
            href="https://www.linkedin.com/in/fernando-zeitler/"
            target="_blank"
          >
            <AiFillLinkedin size="5em" />
          </a>
        </Center>
        <Center
          bgGradient="linear(to-r, teal.500, green.500)"
          borderRadius="20px"
          h="40"
          w="22%"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <a href="https://twitter.com/fessit0" target="_blank">
            <AiOutlineTwitter size="5em" />
          </a>
        </Center>
        <Center
          bgGradient="linear(to-r, teal.500, green.500)"
          borderRadius="20px"
          h="40"
          w="22%"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          <a href="http://gmail.com" target="_blank">
            <AiFillMail size="5em" />
          </a>
        </Center>
      </Flex>
    </>
  );
}
