import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import { useEffect, useState } from "react";

const GameGrid = ({ games, setGames }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getGames = async () => {
			try {
				const res = await fetch("http://localhost:5000/api/games");
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error);
				}
				setGames(data);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		getGames();
	}, [setGames]);

	console.log(games);
	return (
		<>
			<Grid
				templateColumns={{
					base: "1fr",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap={4}
			>
				{games.map((game) => (
					<GameCard key={game.id} game={game} setGames={setGames} />
				))}
			</Grid>

			{isLoading && (
				<Flex justifyContent={"center"}>
					<Spinner size={"xl"} />
				</Flex>
			)}
			{!isLoading && games.length === 0 && (
				<Flex justifyContent={"center"}>
					<Text fontSize={"xl"}>
						<Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
							Poor you! 🥺
						</Text>
						No games found.
					</Text>
				</Flex>
			)}
		</>
	);
};
export default GameGrid;