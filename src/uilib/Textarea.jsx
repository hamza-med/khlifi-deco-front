import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChTextarea,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const Textarea = ({
  label,
  name,
  placeholder,
  control,
  required,
  h = "120",
  className = "billing__input",
}) => {
  return (
    <div>
      {name && (
        <Controller
          name={name}
          id={name}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className={className}>
                <FormControl isRequired={required} isInvalid={!!error?.message}>
                  <FormLabel htmlFor={name}>{label}</FormLabel>
                  <ChTextarea
                    type={name === "password" ? "password" : "text"}
                    id={name}
                    placeholder={placeholder}
                    {...field}
                    bgColor="white"
                    borderColor="#9F9F9F"
                    h={`${h}px`}
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

export default Textarea;
