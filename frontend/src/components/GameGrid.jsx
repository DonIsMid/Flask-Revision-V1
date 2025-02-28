import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GAMES } from "./Testing/dummy";
import GameCard from "./GameCard";

const GameGrid = ({ games ,setGames }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/games");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong!");
        }
        setGames(data);
       
      }
      catch (error) {
        console.error(error);
      }
    };

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
