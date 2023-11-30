import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
export function AlertError({ isOpen, onClose, onOpen, error }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{error?.title}</AlertTitle>
      <AlertDescription>{error?.desc}</AlertDescription>
    </Alert>
  );
}
