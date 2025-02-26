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
} from '@chakra-ui/react'
import { BiAddToQueue } from "react-icons/bi";

const CreateGameModal = () => {
  return <>
  <Button>
    <BiAddToQueue color={"rgb(220, 70, 97)"}/>

  </Button>
  </>
};

export default CreateGameModal;
