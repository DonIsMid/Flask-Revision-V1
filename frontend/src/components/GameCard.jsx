import {
  Card,
  CardHeader,
  Flex,
  Box,
  Text,
  Heading,
  IconButton,
  CardBody,
  useColorModeValue,
  Image,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../Games";

const GameCard = ({ game, setGames }) => {
  const toast = useToast();

  const handleDeleteGame = async () => {
    try {
      const res = await fetch(BASE_URL + "/games/" + game.id, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("An error occurred while deleting the game.");
      }

      setGames((prevGames) =>
        prevGames.filter((currentGame) => currentGame.id !== game.id)
      );

      toast({
        title: "Game deleted successfully!",
        description: "We've removed the game from the list.",
        status: "success",
        duration: 5000,
        isClosable: true,
        colorScheme: "pink",
      });
    } catch (error) {
      toast({
        title: "We couldn't delete that...",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        colorScheme: "pink",
      });
    }
  };

  return (
    <Card bg={useColorModeValue("brand.800", "brand.700")} borderRadius={10}>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Image maxH={"150px"} src={game.image_url} borderRadius={10} />

            <Box>
              <Heading size="sm">{game.title}</Heading>
              <Text>{game.category}</Text>
              <Text>{game.genre}</Text>
            </Box>
          </Flex>

          <Flex>
            <EditModal game={game} setGames={setGames} />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-label="Delete game"
              icon={<BiTrash size={20} />}
              onClick={handleDeleteGame}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody bg={useColorModeValue("brand.400", "brand.500")}>
        <Text>{game.description}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
