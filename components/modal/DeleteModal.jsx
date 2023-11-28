import {
	Button,
	Center,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
  } from "@chakra-ui/react";
  
  export function DeleteModal({
	isOpen,
	onClose,
	target,
	onDelete,
	title,
	message,
  }) {
	const handleDelete = () => {
	  onDelete(target);
	  onClose();
	};
  
	return (
	  <Modal isOpen={isOpen} onClose={onClose} isCentered>
		<ModalOverlay bg={"#0000000D"} backdropFilter={"blur(5px)"} />
		<ModalContent
		  borderRadius={"10px"}
		  bg={"#fff"}
		  w={"auto"}
		  mt={"17%"}
		  mx={"auto"}
		  p={"50px"}
		  display={"flex"}
		  gap={"1.5rem"}
		  shadow={"lg"}
		>
		  <ModalBody>
			<VStack spacing={"1.5rem"} textAlign={"center"}>
			  <Text
				fontSize={"2xl"}
				color={"black"}
				fontWeight={"medium"}
				lineHeight={"1.875rem"}
			  >
				{title || "Anda yakin ingin menghapus data ini?"}
			  </Text>
			  <Text
				color={"#828282"}
				fontWeight={"semibold"}
				lineHeight={"0.4375rem"}
			  >
				{message || "Data yang dihapus tidak dapat dipulihkan"}
			  </Text>
			</VStack>
		  </ModalBody>
		  <ModalFooter pt={0} display={"flex"} justifyContent={"space-evenly"}>
			<Button
			  color={"white"}
			  bg={"#828282"}
			  borderRadius={"lg"}
			  px={"20px"}
			  py={"15px"}
			  rounded={"5px"}
			  _hover={{ bg: "#333333" }}
			  onClick={onClose}
			>
			  Batal
			</Button>
			<Button
			  color={"white"}
			  bg={"#FF5C5C"}
			  borderRadius={"lg"}
			  rounded={"5px"}
			  px={"20px"}
			  py={"15px"}
			  _hover={{ bg: "#FF0000" }}
			  onClick={handleDelete}
			>
			  Hapus
			</Button>
		  </ModalFooter>
		</ModalContent>
	  </Modal>
	);
  }
  