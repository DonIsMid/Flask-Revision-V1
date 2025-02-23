import { Container, Box, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Container maxW={"900px"}>
      <box px={4} my={4} borderRadius={3}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/*Stuff That goes on the left side of the navbar */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            dsisplay={{ base: "none", sm: "flex" }}
          ></Flex>
          {/*Stuff That goes on the right side of the navbar */}
          <Flex></Flex>
        </Flex>
      </box>
    </Container>
  );
};

export default Navbar;
