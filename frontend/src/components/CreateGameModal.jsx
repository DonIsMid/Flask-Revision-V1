import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  RadioGroup,
  Radio,
  useColorMode,
  useColorModeValue,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateGameModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} bg={useColorModeValue("brand.400", "brand.500")}>
        <BiAddToQueue color={"rgb(220, 70, 97)"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={useColorModeValue("brand.600", "brand.500")}>
          <ModalHeader>New Game 🔥</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              <FormControl>
                <FormLabel>Full Title</FormLabel>
                <Input placeholder="Game Name" />
              </FormControl>

              <FormControl>
                <FormLabel>Genre</FormLabel>
                <Input placeholder="Game Genre" />
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflow={"hidden"}
                placeholder="What's the game about?"
              />
            </FormControl>

            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="aaa">AAA</Radio>
                <Radio value="aa">AA</Radio>
                <Radio value="indie">Indie</Radio>
              </Flex>
            </RadioGroup>

            <FormControl mt={4}>
              <FormLabel>Cover Image URL</FormLabel>
              <Textarea
                resize={"none"}
                overflow={"hidden"}
                placeholder="https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Add
            </Button>
            <Button colorScheme="red" mr={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateGameModal;
