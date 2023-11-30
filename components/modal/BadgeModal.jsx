import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Flex,
  ModalCloseButton,
  Text,
  IconButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { CloseSquare } from "react-iconly";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Input } from "@/components/inputs/Input";

export function BadgeModal({ isOpen, onClose, target }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [editedBadge, setEditedBadge] = useState(target?.name);
  const [editedPoin, setEditedPoin] = useState(target?.password);

  const handlerEditUser = async (data) => {
    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/api/user/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          id:target?.id,
          name:data.username,
          password:data.password
        }),
      });

      getAllUsers();
      if (res.ok) {
        onCloseEdit();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (data) => {
    handlerEditUser(data)
    onSubmit(data);
    onClose();
  };

  useEffect(() => {
    console.log(target);
    setEditedBadge(target?.name);
    setEditedPoin(target?.password);
  }, [target?.name, target?.password]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
      <ModalOverlay bg={"#0000000D"} backdropFilter={"blur(5px)"} />
      <ModalContent
        bg={"#fff"}
        w={"auto"}
        mt={"13%"}
        mx={"auto"}
        p={"50px"}
        display={"flex"}
        gap={"1.5rem"}
        shadow={"lg"}
        borderRadius="12px"
      >
        <ModalHeader>
          <Flex flexDirection={"column"}>
            <Text fontWeight="bold" fontSize={"3xl"}>
              Edit User
            </Text>
          </Flex>
          <IconButton
            as={ModalCloseButton}
            icon={<CloseSquare size={"large"} />}
            size={"sm"}
            bg={"transparent"}
            color={"#828282"}
            position={"absolute"}
            right={"1.5rem"}
            top={"1.5rem"}
            _hover={{ bg: "transparent", color: "#333333" }}
            _focus={{ boxShadow: "none" }}
            onClick={onClose}
          />
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <ModalBody>
              <Flex direction={"column"} gap={3}>
                <Input
                  value={editedBadge}
                  label={"Username"}
                  placeholder={"Username"}
                  control={control}
                  error={errors.badge}
                />
                <Input
                  value={editedPoin}
                  label={"Password"}
                  placeholder={"Password"}
                  control={control}
                  error={errors.poin}
                />
              </Flex>
              <Text
                fontWeight="regular"
                fontSize={"md"}
                my={"2"}
                color={"#828282"}
              ></Text>
            </ModalBody>
          </form>
        </ModalBody>
        <ModalFooter px={25} py={5}>
          <Flex gap={5}>
            <Button
              color={"white"}
              bg={"#828282"}
              borderRadius={"10px"}
              px={"2rem"}
              py={"1.5rem"}
              _hover={{ bg: "#333333" }}
              onClick={() => {
                reset();
                onClose();
              }}
            >
              Batal
            </Button>
            <Button
              color={"white"}
              bg={"#35CC33"}
              borderRadius={"10px"}
              px={"2rem"}
              py={"1.5rem"}
              _hover={{ bg: "#2DA22D" }}
              type="submit"
              onSubmit={onClose}
            >
              Simpan
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
