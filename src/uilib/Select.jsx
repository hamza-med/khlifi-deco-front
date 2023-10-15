import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChSelect,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const Select = ({
  label,
  name,
  placeholder,
  control,
  options,
  required,
  className = "billing__input",
  ...props
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
                  <ChSelect
                    {...props}
                    type={name === "password" ? "password" : "text"}
                    id={name}
                    placeholder={placeholder}
                    {...field}
                    bgColor="white"
                    borderColor="#9F9F9F"
                  >
                    {options?.map((option, id) => (
                      <option key={id} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </ChSelect>
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

export default Select;
