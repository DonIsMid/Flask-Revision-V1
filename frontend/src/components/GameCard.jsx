import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Text,
  Heading,
  IconButton,
  CardBody,
  useColorMode,
  useColorModeValue,
  extendTheme,
  ChakraProvider,
  Image
} from "@chakra-ui/react";
import React from "react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";

const GameCard = ({ game }) => {
  return (
    <Card bg={useColorModeValue("brand.800", "brand.700")} borderRadius={10}>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Image maxH={"150px"} src={game.image_url} borderRadius={10}/>

            <Box>
              <Heading size="sm">{game.title}</Heading>
              <Text>{game.category}</Text>
              <Text>{game.genre}</Text>
            </Box>
          </Flex>

          <Flex>
            <EditModal />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-label="See menu"
              icon={<BiTrash size={20} />}
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
