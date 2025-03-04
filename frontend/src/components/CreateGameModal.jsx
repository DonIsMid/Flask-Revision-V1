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
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../Games";

const CreateGameModal = ({ setGames }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    title: "",
    genre: "",
    category: "",
    description: "",
    image_url: "",
  });
  const toast = useToast();

  const handleCreateGame = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(BASE_URL + "/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast({
        title: "Game added successfully!",
        description: "We've added your game to the list.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onClose();

      setGames((prevGames) => [...prevGames, data]);
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
      setInputs({
        title: "",
        genre: "",
        category: "",
        description: "",
        image_url: "",
      });
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
          <ModalContent
            bg={useColorModeValue("brand.600", "brand.500")}
            color={useColorModeValue("brand.900", "brand.800")}
          >
            <ModalHeader>New Game 🔥</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                <FormControl>
                  <FormLabel>Full Title</FormLabel>
                  <Input
                    placeholder="Game Name"
                    value={inputs.title}
                    onChange={(e) =>
                      setInputs({ ...inputs, title: e.target.value })
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Genre</FormLabel>
                  <Input
                    placeholder="Game Genre"
                    value={inputs.genre}
                    onChange={(e) =>
                      setInputs({ ...inputs, genre: e.target.value })
                    }
                  />
                </FormControl>
              </Flex>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflow={"hidden"}
                  placeholder="What's the game about?"
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </FormControl>

              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio
                    value="AAA"
                    onChange={(e) =>
                      setInputs({ ...inputs, category: e.target.value })
                    }
                  >
                    AAA
                  </Radio>
                  <Radio
                    value="AA"
                    onChange={(e) =>
                      setInputs({ ...inputs, category: e.target.value })
                    }
                  >
                    AA
                  </Radio>
                  <Radio
                    value="Indie"
                    onChange={(e) =>
                      setInputs({ ...inputs, category: e.target.value })
                    }
                  >
                    Indie
                  </Radio>
                </Flex>
              </RadioGroup>

              <FormControl mt={4}>
                <FormLabel>Cover Image URL</FormLabel>
                <Textarea
                  resize={"none"}
                  overflow={"hidden"}
                  placeholder="https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg"
                  value={inputs.image_url}
                  onChange={(e) =>
                    setInputs({ ...inputs, image_url: e.target.value })
                  }
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                isLoading={isLoading}
              >
                Add
              </Button>
              <Button colorScheme="red" mr={3} onClick={onClose}>
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
