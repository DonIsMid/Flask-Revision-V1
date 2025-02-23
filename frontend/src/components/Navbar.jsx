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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1000px"}>
      <Box
        px={4}
        my={2}
        borderRadius={5}
        bg={useColorModeValue(" #bfebda", "gray.700")}
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/*Stuff That goes on the left side of the navbar */}
          <Flex
            gap={3}
            alignItems={"center"}
            justifyContent={"center"}
            dsisplay={{ base: "none", sm: "flex" }}
          >
            <img
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              color="pink"
            ></img>
          </Flex>

          {/*Stuff That goes on the right side of the navbar */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
            >
              What you playing?
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <IoMoon size={20} />
              ) : (
                <LuSun size={20} />
              )}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
