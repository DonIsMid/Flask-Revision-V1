import { Grid } from "@chakra-ui/react";
import React from "react";
import { GAMES } from "./Testing/dummy";
import GameCard from "./GameCard";

const GameGrid = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
};

export default GameGrid;
