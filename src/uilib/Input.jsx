import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChInput,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const Input = ({ label, name, placeholder, control, required }) => {
  return (
    <div>
      {name && (
        <Controller
          name={name}
          id={name}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className="billing__input">
                <FormControl isRequired={required} isInvalid={!!error?.message}>
                  <FormLabel htmlFor="name">{label}</FormLabel>
                  <ChInput
                    placeholder={placeholder}
                    {...field}
                    bgColor="white"
                    borderColor="#9F9F9F"
                  />
                  <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
              </div>
            );
          }}
        />
      )}
    </div>
  );
};

export default Input;
