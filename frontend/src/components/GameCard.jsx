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
} from "@chakra-ui/react";
import React from "react";
import { BiTrash } from "react-icons/bi";

const GameCard = ({ game }) => {
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src="https://api.dicebear.com/9.x/identicon/svg?randomizeIds=false" />

            <Box>
              <Heading size="sm">{game.title}</Heading>
              <Text>{game.category}</Text>
              <Text>{game.genre}</Text>
            </Box>
          </Flex>

          <Flex>
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
      <CardBody>
        <Text>{game.description}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
