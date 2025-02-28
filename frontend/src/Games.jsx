import * as React from "react";
import { Button, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function Games() {
  const [games, setGames] = React.useState([]);
  return (
    <Stack minH={"100vh"} bg={useColorModeValue("brand.300", "brand.00")}>
      <Navbar setGames={setGames} />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ basse: "3x1", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient="linear(to-r,brand.900,brand.900)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            🎮List of Games🎮
          </Text>
        </Text>
        <GameGrid games={games} setGames={setGames} />
      </Container>
    </Stack>
  );
}

export default Games;
