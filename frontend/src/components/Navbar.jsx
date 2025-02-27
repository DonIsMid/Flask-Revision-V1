import {
  Container,
  Box,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import CreateGameModal from "./CreateGameModal";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1000px"}>
      <Box
        px={4}
        my={2}
        borderRadius={5}
        bg={useColorModeValue("brand.800", "brand.700")}
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/*Stuff That goes on the left side of the navbar */}
          <Flex
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
            dsisplay={{ base: "none", sm: "flex" }}
          >
            <a href="https://cat-bounce.com/">
              <img
                src="/logo.png"
                alt="logo"
                width={30}
                height={30}
                color="pink"
              />
            </a>
            <Text
              as={"span"}
              bg={"brand.900"}
              bgClip="text"
              fontSize="20px"
              fontWeight="extrabold"
            >
              GameNet™
            </Text>
          </Flex>

          {/*Stuff That goes on the right side of the navbar */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              as={"span"}
              bg={"brand.900"}
              bgClip="text"
              fontSize="15px"
              fontWeight="extrabold"
            >
              What are we playing today?
            </Text>
            <Button
              onClick={toggleColorMode}
              color={"brand.900"}
              Card
              bg={useColorModeValue("brand.400", "brand.500")}
            >
              {colorMode === "light" ? (
                <IoMoon size={20} />
              ) : (
                <LuSun size={20} />
              )}
            </Button>
            <CreateGameModal />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
