import theme from "@/theme";
import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast({ theme: theme });
const customToast = (
  title = "Product added successfully",
  description = "Product added successfully",
  status = "success",
  position = "top"
) => {
  const variant = status === "success" ? "primary" : "secondary";
  toast({
    title: title,
    description: description,
    status: status,
    position: position,
    isClosable: true,
    variant: variant,
    duration: 3000,
  });
};
export default customToast;
