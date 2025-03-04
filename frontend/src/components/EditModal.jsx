import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Textarea,
  useDisclosure,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";
import React from "react";

function EditModal({ game, setGames }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    title: game.title,
    genre: game.genre,
    category: game.category,
    description: game.description,
    image_url: game.image_url,
  });
  const toast = useToast();

  const handleEditGame = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/games/" + game.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setGames((prevGames) =>
        prevGames.map((currentGame) =>
          currentGame.id === game.id ? data : currentGame
        )
      );
      toast({
        title: "Game updated successfully!",
        description: "We've updated your game.",
        status: "success",
        duration: 5000,
        isClosable: true,
        colorScheme: "cyan",
      });
    } catch (error) {
      toast({
        title: "We couldn't update that...",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        colorScheme: "pink",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="ghost"
        colorScheme="blue"
        aria-label="See menu"
        size={"sm"}
        icon={<BiEditAlt size={20} />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <form onSubmit={handleEditGame}>
          <ModalContent
            bg={useColorModeValue("brand.600", "brand.500")}
            color={useColorModeValue("brand.900", "brand.800")}
          >
            <ModalHeader>Edit Game 🛠</ModalHeader>
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
                  placeholder="enter your image url"
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
                Update
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
}

export default EditModal;
