import { Button } from "@chakra-ui/react";
import { forwardRef } from "react";
import { VscCalendar } from "react-icons/vsc";
const PickerInput = forwardRef(
  ({ iconSize = "1.5rem", value, onClick, ...props }, ref) => {
    return (
      <>
        <Button
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="5px"
          leftIcon={<VscCalendar fontSize={iconSize} color="grey" />}
          onClick={onClick}
          ref={ref}
          _hover={{ bgColor: "white" }}
          fontSize={["1rem", "1.2rem"]}
          fontWeight="normal"
          border="1px solid lightgrey"
          color="#ac8f69"
          borderRadius="3px"
          variant="outline"
          position="relative"
          padding="1.5em 1.5em"
          {...props}
        >
          {value}
        </Button>
      </>
    );
  }
);

export default PickerInput;
