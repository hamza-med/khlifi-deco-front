import { Button } from "@chakra-ui/react";
import { forwardRef } from "react";
import { VscCalendar } from "react-icons/vsc";

const PickerInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <div>
      <Button
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        leftIcon={<VscCalendar fontSize="1.8rem" color="grey" />}
        onClick={onClick}
        ref={ref}
        _hover={{ bgColor: "white" }}
        fontSize="1.1rem"
        fontWeight="normal"
        border="1px solid grey"
        color="#ac8f69"
        borderRadius="3px"
        variant="outline"
        padding="1.3em 1.3em"
      >
        {value}
      </Button>
    </div>
  );
});

export default PickerInput;
