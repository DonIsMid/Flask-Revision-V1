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
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    title: "",
    genre: "",
    category: "",
    description: "",
    image_url: "",
  });
  const handleCreateGame = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/games", {

    }
  };

  return (
    <>
      <Button onClick={onOpen} bg={useColorModeValue("brand.400", "brand.500")}>
        <BiAddToQueue color={"rgb(220, 70, 97)"} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <form onSubmit={handleCreateGame}>

        <ModalContent bg={useColorModeValue("brand.600", "brand.500")} color={useColorModeValue("brand.900", "brand.800")}>

          <ModalHeader>New Game 🔥</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              <FormControl>
                <FormLabel>Full Title</FormLabel>
                <Input placeholder="Game Name" 
                value={inputs.title}
                onChange={(e) => setInputs({...inputs, title: e.target.value})}/>
              </FormControl>

              <FormControl>
                <FormLabel>Genre</FormLabel>
                <Input placeholder="Game Genre" 
                value={inputs.genre}
                onChange={(e) => setInputs({...inputs, genre: e.target.value})}/>
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflow={"hidden"}
                placeholder="What's the game about?"
                value={inputs.description}
                onChange={(e) => setInputs({...inputs, description: e.target.value})}
              />
            </FormControl>

            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="aaa"
                onChange={(e) => setInputs({...inputs, category: e.target.value})}
                >AAA</Radio>
                <Radio value="aa"
                onChange={(e) => setInputs({...inputs, category: e.target.value})}
                >AA</Radio>
                <Radio value="indie"
                onChange={(e) => setInputs({...inputs, category: e.target.value})}
                >Indie</Radio>
              </Flex>
            </RadioGroup>

            <FormControl mt={4}>
              <FormLabel>Cover Image URL</FormLabel>
              <Textarea
                resize={"none"}
                overflow={"hidden"}
                placeholder="https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg"
                value={inputs.image_url}
                onChange={(e) => setInputs({...inputs, image_url: e.target.value})}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Add
            </Button>
            <Button colorScheme="red" mr={3}>
              Cancel
            </Button>
          </ModalFooter>

        </ModalContent>

        </form>

      </Modal>
    </>
  );
};

export default CreateGameModal;
