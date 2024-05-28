import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as Input,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const NumberInput = ({
  onChange,
  step,
  defaultValue,
  min,
  max,
  width = "68px",
  ...props
}) => {
  return (
    <Input
      onChange={onChange}
      step={step}
      defaultValue={defaultValue}
      min={min}
      max={max}
    >
      <NumberInputField width={width} {...props} />
      <NumberInputStepper>
        <NumberIncrementStepper
          border="none"
          fontSize="0.55rem"
          color="rgba(0,0,0,0.7)"
        />
        <NumberDecrementStepper
          border="none"
          fontSize="0.55rem"
          color="rgba(0,0,0,0.7)"
        />
      </NumberInputStepper>
    </Input>
  );
};

export default NumberInput;
