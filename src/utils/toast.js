import theme from "@/theme";
import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast({ theme: theme });
const customToast = (
  title = "Product added successfully",
  description = "Product retiré avec succées",
  status = "success",
  position = "top",
  duration = 3000
) => {
  const variant =
    status === "success" ? "primary" : status === "info" ? "info" : "secondary";
  toast({
    title,
    description,
    status,
    position,
    isClosable: true,
    variant,
    duration,
  });
};
export default customToast;
