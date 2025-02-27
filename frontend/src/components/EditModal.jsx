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
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

function EditModal({ game }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <ModalContent>
          <ModalHeader>Edit your game ✏</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              <FormControl>
                <FormLabel>Full Title</FormLabel>
                <Input placeholder="Game Title" />
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
                overflowY={"hidden"}
                placeholder="Gimme the description.
               "
              />
            </FormControl>
            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="AAA">AAA</Radio>
                <Radio value="AA">AA</Radio>
                <Radio value="Indie">Indie</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditModal;
